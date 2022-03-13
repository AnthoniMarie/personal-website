'use strict';

/**
 *  mailing controller
 */

module.exports = {
  async index(ctx, next) {
    await next();
    const { last_name, first_name, email, phone, message } = ctx.request.body;

    if (!last_name ||!first_name || !email || !phone || !message)
      return (ctx.body = {message: "Please fill all fields"});

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'contact@anthoni-marie.fr',
        from: 'noreply@anthoni-marie.fr',
        replyTo: email,
        subject: 'Nouveau message de contact - anthoni-marie.fr',
        text: "Nom: " + last_name +
          "\nPrénom: " + first_name +
          "\nTéléphone: " + phone +
          "\nMessage: " + message,
      });
    }
    catch (e) {
      ctx.body = {message: "An error occured"};
      console.log("error occured");
    }
    ctx.body = {message: "Message sent with success"};
  },
};
