# Strapi app version plugin

Simple Mandrill plugin for Strapi 4 

## Installation

```sh
npm install @guoshiro/strapi-provider-plugin-mandrill
```

or

```sh
yarn add @palmabit/strapi-provider-plugin-mandrill
```


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
      },
    },
  }
```