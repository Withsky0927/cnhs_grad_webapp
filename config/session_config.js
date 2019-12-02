const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  host: `${process.env.DB_HOSTNAME}`,
  port: 3306,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
  schema: {
    tableName: `${process.env.SESSION_TABLE}`,
    columnNames: {
      session_id: 'session_id',
      expires: 'session_expiration',
      data: 'session_data',
    },
  },
};
