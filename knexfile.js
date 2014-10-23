// Update with your config settings.

var connection = process.env.DATABASE_URL || {
  host: process.env.APP_DB_HOST || '127.0.0.1',
  user: process.env.APP_DB_USER || '',
  password: process.env.APP_DB_PASSWORD || '',
  database: process.env.APP_DB_NAME || 'jsi-microblog'
};

module.exports = {

  development: {
    client: 'postgres',
    connection: connection
  },

  test: {
    client: 'postgres',
    connection: connection
  },

  staging: {
    client: 'postgresql',
    connection: connection,
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: connection,
    pool: {
      min: 2,
      max: 10
    }
  }

};
