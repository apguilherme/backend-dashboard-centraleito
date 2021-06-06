const mongoose = require('mongoose');
 
const HospitalSchema = new mongoose.Schema({
    ownerId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    name: String,
    city: String,
    uf: String,
    address: String,
    num_waiting: Number,
    person_name: String,
    person_contact: String,
    beds: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Bed"}
    ]
});

module.exports = mongoose.model('Hospital', HospitalSchema);