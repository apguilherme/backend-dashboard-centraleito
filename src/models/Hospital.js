const mongoose = require('mongoose');
 
const HospitalSchema = new mongoose.Schema({
    ownerId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    name: String,
    city: String,
    uf: String,
    address: String,
    num_beds: Number,
    num_beds_occupied: Number,
    num_waiting: Number,
    time_waiting: Number,
    person_name: String,
    person_contact: String,
});

module.exports = mongoose.model('Hospital', HospitalSchema);