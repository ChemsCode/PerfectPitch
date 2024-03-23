/**
 * Error handler middleware.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message);
}

module.exports = errorHandler;
