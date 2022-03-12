module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f1109ed4275781e9d1a01cc2dd6c37f'),
  },
});
