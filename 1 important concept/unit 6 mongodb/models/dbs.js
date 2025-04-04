const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    reg_Number: Number,
    selection: String
});

module.exports = mongoose.model('Student', StudentSchema);


