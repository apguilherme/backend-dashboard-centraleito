const mongoose = require('mongoose');
 
const BedSchema = new mongoose.Schema({
    hospitalId: {type: mongoose.Schema.Types.ObjectId, ref: "Hospital"},
    name: String,
    city: String,
    uf: String,
    age: String,
    document: String,
    time_waiting: String,
    contact: String,
    severity: String
});

module.exports = mongoose.model('Bed', BedSchema);