const mongoose = require('mongoose');
 
const HospitalSchema = new mongoose.Schema({
    name: String,
    city: String,
    uf: String,
    address: String,
    num_beds: Number,
    num_beds_occupied: Number,
    person_name: String,
    person_contact: String,
});

module.exports = mongoose.model('Hospital', HospitalSchema);