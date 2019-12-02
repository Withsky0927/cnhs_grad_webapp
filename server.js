// load all packages needed
const express = require('express');
const session = require('express-session');
const MysqlSessionStore = require('express-mysql-session')(session);
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
const helmet = require('helmet');
const path = require('path');
const rateLimit = require('./config/rate_limiter');

// initialize environment variables
dotenv.config();

// instantiate express contructor
const server = express();

// initialize sessionStore
const sessionOption = require('./config/session_config');
const sessionStore = new MysqlSessionStore(sessionOption);

// initialze port from env variables
const PORT = process.env.PORT || process.env.DEV_PORT;

// initialize bodyparser for handleing req.body object
server.use(express.json({ limit: '200kb' }));
server.use(express.urlencoded({ extended: false }));

/// set basic security prevention
server.use(helmet.xssFilter());
server.use(helmet.hidePoweredBy());
server.use(
  helmet.frameguard({
    action: 'allow-from',
    domain: 'https://cdn.ckeditor.com',
  }),
);
server.use(helmet.noSniff());
server.use(helmet.ieNoOpen());
server.use(helmet.ieNoOpen());
server.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// add public folder for static files
const staticConfig = require('./config/express_static_options');

server.use(express.static('public', staticConfig));

// set  handlebars as view engine
server.engine(
  '.hbs',
  handlebars({
    defaultLayout: 'boilerplate',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/templates'),
  }),
);
server.set('view engine', '.hbs');

/// laod all routes
const login = require('./routes/login_route');
const register = require('./routes/register_route');
const forgotPassword = require('./routes/forgotpassword_route');

server.use('/', login);
server.use('/login', login);
server.use('/register', register);
server.use('/forgotpassword', forgotPassword);

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server is running at port ${PORT}`);
});
