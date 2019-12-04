const Sequelize = require('sequelize');
const dbConnection = require('../config/db_connection');

const Users = dbConnection.define('users', {
  user_id: {
    primaryKey: true,
    type: Sequelize.UUIDV4(),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(150),
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
  profile_pic: {
    type: Sequelize.STRING(50),
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
  employment_status: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  graduate_id: {
    type: Sequelize.STRING(255),
    allowNull: true,
    unique: true,
  },
  account_id: {
    type: Sequelize.STRING(255),
    allowNull: true,
    unique: true,
  },
});

module.exports = Users;
