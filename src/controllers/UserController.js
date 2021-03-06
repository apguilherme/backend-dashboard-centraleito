const mongoose = require('mongoose');

const Item = require('../models/User');

exports.getItems = async (req, res, next) => {
    const items = await Item.find();
    return res.json(items);
};

exports.getItemById = async (req, res, next) => {
    const {id} = req.params;
    let item = await Item.findById(id);
    return res.json(item);
};

exports.addItem = async (req, res, next) => {
    const { name, email, password } = req.body; 
    let item = await Item.findOne({ email });
    if (!item) {
        item = await Item.create({ name, email, password });
    }
    return res.json(item);
};

exports.updateItem = async (req, res, next) => {
    let {id} = req.body;
    let item = await Item.findByIdAndUpdate(id, req.body, {useFindAndModify: false});
    return res.json(item);
};

exports.deleteItem = async (req, res, next) => {
    let {id} = req.body;
    let item = await Item.findByIdAndDelete(id);
    return res.json(item);
};
