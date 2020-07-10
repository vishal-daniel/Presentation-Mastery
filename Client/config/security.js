
const secure = require('express-secure-only');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

module.exports = (app) => {
  app.enable('trust proxy');

  app.use(secure());

  app.use(helmet());

  app.use('/api/v1/', rateLimit({
    windowMs: 30 * 1000, // 30 seconds
    delayMs: 0,
    max: 3,
    message: JSON.stringify({
      error: 'Too many requests, please try again in 30 seconds.',
      code: 429,
    }),
  }));
};
