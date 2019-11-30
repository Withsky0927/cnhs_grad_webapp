const express = require('express');

const router = express.Router();

// controllers for forgotPassWord_route
const forgotPassword = require('../controllers/forgotpassword_controller');

router.get('/', forgotPassword.getForgotPasswordForm);
module.exports = router;
