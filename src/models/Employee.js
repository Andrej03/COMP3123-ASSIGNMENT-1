const mongoose = require('mongoose');

const EmployeeCollectionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    position: { type: String },
    salary: { type: Number },
    date_of_joining: { type: Date },
    department: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', EmployeeCollectionSchema);
