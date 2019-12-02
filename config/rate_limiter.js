const rateLimiter = require('express-rate-limit');

module.exports = rateLimiter({
  windowMs: 60 * 60 * 24,
  max: 100,
  message:
    'Your ip address has been blocked for 24 hours for making so many same request to our Server!',
});
