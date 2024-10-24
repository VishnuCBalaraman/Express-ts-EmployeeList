import mongoose, { model, Schema } from 'mongoose';


const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },
  salary: { type: Number, required: true },
  dateOfJoining: { type: Date, default: Date.now },
  location: { type: String, required: true },
  manager: { type: String },
}, { versionKey: false });



export default model('Employee', EmployeeSchema);
