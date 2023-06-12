const jwt = require('../lib/jsonWebToken');
const { SECRET } = require('../config/config');



exports.auth = async (req, res, next) => {
    const token = req.cookies['auth']

    if (token) {
        // validate token
        try {
            await jwt.verify(token, SECRET);
            req.user = user;
            next();
        } catch (error) {
            res.clearCookie('auth');

            return res.redirect('/users/login');
        }
    }

    next();
}