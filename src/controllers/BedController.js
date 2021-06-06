const Bed = require('../models/Bed');
const Hospital = require('../models/Hospital');

exports.getItemById = async (req, res, next) => {
    const {id} = req.params;
    let item = await Bed.findById(id);
    return res.json(item);
};

exports.addItem = async (req, res, next) => {
    const { name, city, uf, age, document, time_waiting, contact, severity } = req.body; 
    let bed = await Bed.findOne({ document });
    if (!bed) {
        let ownerId = req.tknUserId;
        let hosp = await Hospital.findOne({ ownerId });
        let hospitalId = hosp._id;
        bed = await Bed.create({ hospitalId, name, city, uf, age, document, time_waiting, contact, severity });
        await Hospital.findByIdAndUpdate(hospitalId, {$push: {beds: bed._id}}, {useFindAndModify: false});
    }
    return res.json(bed);
};

exports.updateItem = async (req, res, next) => {
    let {id} = req.body;
    let item = await Bed.findByIdAndUpdate(id, req.body, {useFindAndModify: false});
    return res.json(item);
};

exports.deleteItem = async (req, res, next) => {
    let {id, hospitalId} = req.body;
    let bed = await Bed.findByIdAndDelete(id);
    await Hospital.findByIdAndUpdate(hospitalId, {$pull: {beds: bed._id}}, {useFindAndModify: false});
    return res.json(bed);
};
