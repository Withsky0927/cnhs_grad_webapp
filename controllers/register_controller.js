"use strict";
const path = require("path");
const getRegisterForm = async (req, res) => {
  const title = "Registration Form";
  try {
    res.render(`register`);
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = {
  getRegisterForm
};
