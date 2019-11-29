"use strict";

const express = require("express");
const router = express.Router();

// controllers for register_route
const register = require("../controllers/register_controller");

router.get("/", register.getRegisterForm);

module.exports = router;
