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
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Error updating student' });
    }
};

