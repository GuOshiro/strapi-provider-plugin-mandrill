/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */
// Public node modules.

/* eslint-disable no-unused-vars */
module.exports = {
  provider: "mandrill",
  name: "Mandrill",
  auth: {
    mandrill_default_from_email: {
      label: "Mandrill Default From Email",
      type: "text",
    },
    mandrill_default_from_name: {
      label: "Mandrill Default From Name",
      type: "text",
    },
    mandrill_default_replyto: {
      label: "Mandrill Default Reply-To",
      type: "text",
    },
    mandrill_api_key: {
      label: "Mandrill API Key",
      type: "text",
    },
  },
  init: (config, settings) => {
    const mandrill = require("@mailchimp/mailchimp_transactional")(
      config.apiKey
    );
    return {
      send: async (options, cb) => {
        try {
          options = typeof options === "object" ? options : {};
          options.from_name = options.from_name || settings.defaultName;
          options.from_email = options.from_email || settings.defaultFrom;
          options.replyTo = options.replyTo || settings.defaultReplyTo;
          options.text = options.text || options.defaultHtml;
          options.html = options.html || options.defaultText;

          let msg = {
            ...options,
            from_name: options.from_name,
            from_email: options.from_email,
            to: [
              {
                email: options.to,
                name: options.name,
                type: "to",
              },
            ],
            reply_to: options.replyTo,
            subject: options.subject,
            text: options.text,
            html: options.html,
          };
          const sentEmail = await mandrill.messages.send({
            message: msg,
            send_at: new Date(),
          });
          if (sentEmail[0]?.status === "rejected") {
            throw new Error([
              { messages: [{ id: "Auth.form.error.email.invalid" }] },
            ]);
          }
        } catch (e) {
          console.error(e);
          throw new Error([
            { messages: [{ id: "Auth.form.error.email.invalid" }] },
          ]);
        }
      },
    };
  },
};
