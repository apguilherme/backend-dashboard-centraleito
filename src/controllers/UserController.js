const mongoose = require('mongoose');

const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
    const users = await User.find();
    return res.json(users);
};

exports.getUserById = async (req, res, next) => {
    const {id} = req.params;
    let user = await User.findById(id);
    return res.json(user);
};

exports.postUser = async (req, res, next) => {
    const { name, email, password } = req.body; 
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({ name, email, password });
    }
    return res.json(user);
};

exports.putUser = async (req, res, next) => {
    let {id} = req.body;
    let user = await User.findByIdAndUpdate(id, req.body, {useFindAndModify: false});
    return res.json(user);
};

exports.deleteUser = async (req, res, next) => {
    let {id} = req.body;
    let user = await User.findByIdAndDelete(id);
    return res.json(user);
};
