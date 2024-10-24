import mongoose, { Document, Schema } from 'mongoose';

interface IEmployee extends Document {
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  salary: number;
  dateOfJoining: Date;
  location: string;
  manager: string;
}

const EmployeeSchema: Schema = new Schema({
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

const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);
export default Employee;
