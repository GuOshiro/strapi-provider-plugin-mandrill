# Strapi Mandrill plugin

Simple Mandrill plugin for Strapi 4 

## Installation

```sh
npm install strapi-provider-plugin-mandrill
```

or

```sh
yarn add strapi-provider-plugin-mandrill
```


## Dependencies

We are using `@mailchimp/mailchimp_transactional` package. 

So for all send message we'll use this post: https://mailchimp.com/developer/transactional/api/messages/

## Add Pluggin

Add on config/pluggin.ts file the configuration bellow

```
  email: {
    config: {
      provider: "strapi-provider-plugin-mandrill",
      providerOptions: {
        apiKey: process.env.MANDRILL_API_KEY,
      },
     settings: {
        defaultFrom: "contact@email.com",
        defaultName: 'Test',
        defaultReplyTo: 'test@email.com',
        defaultHtml: 'Test',
        defaultText: 'Test',
      },
    },
  }
```