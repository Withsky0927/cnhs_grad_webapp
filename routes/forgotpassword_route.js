const express = require('express');

const router = express.Router();

// controllers will go here
const forgotPassword = require('../controllers/forgotpassword_controller');

// middlewares will go here

router.get('/', forgotPassword.getForgotPasswordForm);
module.exports = router;
