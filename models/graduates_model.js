const Sequelize = require('sequelize');
const dbConnection = require('../config/db_connection');

const Graduates = dbConnection.define('graduates', {
  graduate_id: {
    primaryKey: true,
    type: Sequelize.UUIDV4(),
    allowNull: false,
  },
  profile_pic: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  lrn: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true,
  },
  strand: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  firstname: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  middlename: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT(),
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATE(),
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER(3),
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING(7),
    allowNull: false,
  },
  civil_status: {
    type: Sequelize.STRING(10),
    allowNull: false,
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
  employment_status: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

module.exports = Graduates;
