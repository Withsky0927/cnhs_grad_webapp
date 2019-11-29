"use strict";
// laod all packages needed
const express = require("express");
const session = require("express-session");
const sessionStore = require("express-mysql-session")(session);
const handlebars = require("express-handlebars");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path");
const PORT = process.env.port || 5000;

const server = express();
dotenv.config();

// initialize bodyparser for handleing req.body object
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

/// set basic security prevention
server.use(helmet.xssFilter());
server.use(helmet.hidePoweredBy());
server.use(helmet.frameguard());

// add public folder for static files
const staticConfig = require("./config/express_static_options");
server.use(express.static("public", staticConfig));

// set  handlebars as view engine
server.engine(
  ".hbs",
  handlebars({
    defaultLayout: "boilerplate",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/templates")
  })
);
server.set("view engine", ".hbs");

/// laod all routes
const login = require("./routes/login_route");
const register = require("./routes/register_route");
const forgotPassword = require("./routes/forgotpassword_route");

server.use("/", login);
server.use("/login", login);
server.use("/register", register);
server.use("/forgotpassword", forgotPassword);

server.listen(PORT, err => console.log(`server is running at port ${PORT}`));
