const dotenv = require('dotenv');
const SequelizeORM = require('sequelize');

dotenv.config();

module.exports = new SequelizeORM(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  '',
  {
    host: `${process.env.DB_HOSTNAME}`,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);
