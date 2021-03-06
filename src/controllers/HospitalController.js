const Item = require('../models/Hospital');

exports.getAllItems = async (req, res, next) => {
    const items = await Item.find().populate("beds");
    return res.json(items);
};

exports.getItems = async (req, res, next) => {
    const items = await Item.find({"ownerId": req.tknUserId}).populate("beds");
    return res.json(items);
};

exports.getItemById = async (req, res, next) => {
    const {id} = req.params;
    let item = await Item.findById(id).populate("beds");
    return res.json(item);
};

exports.addItem = async (req, res, next) => {
    const { ownerId, name, city, uf, address, num_waiting, time_waiting, person_name, person_contact } = req.body; 
    let item = await Item.findOne({ name });
    if (!item) {
        item = await Item.create({ ownerId, name, city, uf, address, num_waiting, time_waiting, person_name, person_contact });
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
