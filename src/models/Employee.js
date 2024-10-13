import mongoose from 'mongoose';

const EmployeeCollectionSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    position: { type: String },
    salary: { type: Number },
    date_of_joining: { type: Date },
    department: { type: String },
},{
    timestamps: true
});

export default mongoose.model('Employee', EmployeeCollectionSchema);
