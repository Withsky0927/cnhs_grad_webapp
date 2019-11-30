"use strict";
const path = require("path");
const moment = require("moment");
const uuid = require("uuid/v4");
const bcrypt = require("bcryptjs");

const getRegisterForm = async (req, res) => {
  const title = "Registration Form";
  try {
    res.render(`register`);
  } catch (error) {
    res.sendStatus(404);
  }
};

const createNewAccountForm = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getRegisterForm,
  createNewAccountForm
};
