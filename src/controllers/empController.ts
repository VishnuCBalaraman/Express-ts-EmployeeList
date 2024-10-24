import { Request, Response } from 'express';
import Employee from '../models/Employee';
import mongoose from 'mongoose';

export const getAllEmployees = async(req: Request, res: Response)=>{
    try{
        const employees =await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching Employees' });
    }
}

export const postEmployee = async(req: Request, res: Response)=>{
    try {
        // Destructure the required fields from the request body
        const { name, email, phone, department, designation, salary, dateOfJoining, location, manager } = req.body;

        // Create a new Employee instance
        const newEmployee = new Employee({
            name,
            email,
            phone,
            department,
            designation,
            salary,
            dateOfJoining,
            location,
            manager,
        });

        // Save the employee to the database
        const savedEmployee = await newEmployee.save();

        // Send a success response
        res.status(201).json(savedEmployee); // 201 Created
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Error creating employee' });
    }
}


export const updateEmployee = async (req: Request, res: Response) => {
    try {
        const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(emp);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error updating employee' });
    }
};


export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // Extract the employee ID from the request parameters

        // Find and delete the employee by ID
        const deletedEmployee = await Employee.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' }); // Handle not found case
        }

        // Send a success response
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Error deleting employee' });
    }
};


export const getAEmployee = async(req: Request, res: Response)=>{
    try{
        const {id}= req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid employee ID' });
        }

        const emp = await Employee.findById(id); // Use findById to query by _id

        if (!emp) {
            return res.status(404).json({ error: 'Employee not found' }); // Handle not found case
        }

    }
    catch(error){
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Error deleting employee' });
    }
}