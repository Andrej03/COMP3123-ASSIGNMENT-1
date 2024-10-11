const Employee = require('../../models/Employee');
const mongoose = require('mongoose');

// Get all employees
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get an employee by id
const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new employee
const createEmployee = async (req, res) => {
    const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;
    if (!first_name || !last_name || !email || !position || !salary || !date_of_joining || !department) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const employee = new Employee({ first_name, last_name, email, position, salary, date_of_joining, department });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an employee
const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, department } = req.body;
    if (!name || !email || !department) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const employee = await Employee.findByIdAndUpdate(
            id,
            { name, email, department },
            { new: true }
        );
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete an employee
const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }    
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};

    