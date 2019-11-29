"use strict";

const express = require("express");
const router = express.Router();

// controllers for login_route
const login = require("../controllers/login_controller");

router.get("/", login.getLoginForm);

module.exports = router;
