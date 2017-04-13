

module.exports = function errorHandler(err, req, res, next) {
    console.error('Nope!', err.message);
    res.status(err.status || 500);
    if (err.status === 404) {
        res.end('<h1>404: Page Not Found </h1>');
    }
    res.json({
        message: err.message,
        time: Date.now()
    });
};
