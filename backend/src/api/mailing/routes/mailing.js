module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/mailing',
      handler: 'mailing.index',
      config: {
        auth: false,
      },
    }
  ]
}
