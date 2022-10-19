module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', process.env.RDS_DATABASE_HOST),
      port: env.int('DATABASE_PORT', process.env.RDS_DATABASE_PORT),
      database: env('DATABASE_NAME', process.env.RDS_DATABASE_NAME),
      user: env('DATABASE_USERNAME', process.env.RDS_DATABASE_USERNAME),
      password: env('DATABASE_PASSWORD', process.env.RDS_DATABASE_PASSWORD),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
