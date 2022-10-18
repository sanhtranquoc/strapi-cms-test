module.exports = ({ env }) => ({
  host: env('HOST', '18.204.23.170'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
