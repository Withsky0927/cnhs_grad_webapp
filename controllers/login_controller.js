"use strict";
const path = require("path");
const getLoginForm = async (req, res) => {
  try {
    const title = "login form";
    await res.render("login", { title: title });
  } catch (error) {
    await res.sendStatus(404);
  }
};
module.exports = {
  getLoginForm
};
