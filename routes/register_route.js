const express = require('express');

const router = express.Router();

// controllers for register_route
const register = require('../controllers/register_controller');
const registerMiddleware = require('../middlewares/register_middleware');

router.get('/', register.getRegisterForm);
// router.post("/" , registerMiddleware.);

module.exports = router;
