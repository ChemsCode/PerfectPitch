const allowedOrigins = require('../config/allowedOrigins');

// Middleware function to handle credentials
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (Array.isArray(allowedOrigins) && allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

module.exports = credentials;
