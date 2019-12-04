const Sequelize = require('sequelize');
const dbConnection = require('../config/db_connection');

const Admins = dbConnection.define('admins', {
  admin_id: {
    primaryKey: true,
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  profile_pic: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(150),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: Sequelize.INTEGER(20),
    allowNull: false,
    unique: true,
  },
  account_id: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
});

module.exports = Admins;
