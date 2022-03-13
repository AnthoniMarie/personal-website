module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN'),
        host: env('MAILGUN_HOST'),
      },
      settings: {
        defaultFrom: 'noreply@anthoni-marie.fr',
      },
    },
  },
});
