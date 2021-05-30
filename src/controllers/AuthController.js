const jwt = require('jsonwebtoken');

const Item = require('../models/User');

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    let item = await Item.findOne({ email });
    if (item && email === item.email && password === item.password) {
        const _id = item._id;
        const token = jwt.sign({ _id, email }, process.env.SECRET, {
            expiresIn: 60 * 60 * 24 * 7, // expires in 1 week
        });
        console.log("===> Logged in:", email);
        return res.json({ auth: true, token: token });
    }
    return res.json({ message: 'Wrong user or password.' });
}

exports.logout = async (req, res, next) => {
    console.log("===> Logged out:", email);
    return res.json({ auth: false, token: null });
}

exports.verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.json({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.tknUserId = decoded._id;
        req.tknUserEmail = decoded.email;
        next();
    });
}

exports.verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.json({ valid: false, message: 'No token provided.' });
    }
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return res.json({ valid: false, message: 'Failed to authenticate token.' });
        }
        return res.status(200).json({ valid: true, message: `Valid token for ${decoded.email}.` });
    });
}