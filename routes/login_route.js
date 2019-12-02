const express = require('express');
const router = express.Router();

// controllers will go here
const login = require('../controllers/login_controller');

router.get('/', login.getLoginForm);

module.exports = router;
