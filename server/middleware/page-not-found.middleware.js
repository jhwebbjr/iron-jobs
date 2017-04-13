module.exports = function doErrorPage(req, res, next) {

    if (!req.res.url) {

        let err = new Error('404: Page Not Available');
        err.status = 404;
        return next(err);
    }

    next();
};
