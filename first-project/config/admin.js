module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2092f07af98f6448b65d5258b39f79a7'),
  },
});
