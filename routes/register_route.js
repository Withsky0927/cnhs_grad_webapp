const express = require('express');

const router = express.Router();

// controllers will go here
const register = require('../controllers/register_controller');

// middlewares will go here
const registerMiddleware = require('../middlewares/register_middleware');

router.get('/', register.getRegisterForm);
// router.post("/" , registerMiddleware.);

module.exports = router;
