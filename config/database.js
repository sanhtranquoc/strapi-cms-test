module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'strapi-database-vinhle-test.cugzdtx5dpqv.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', '1qaz!QAZ'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
