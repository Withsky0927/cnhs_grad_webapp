const Sequelize = require('sequelize');
const dbConnection = require('../config/db_connection');

const Accounts = dbConnection.define('accounts', {
  account_id: {
    type: Sequelize.STRING(255),
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

module.exports = Accounts;
