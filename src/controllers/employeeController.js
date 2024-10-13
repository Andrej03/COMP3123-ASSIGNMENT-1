import Employee from '../models/Employee.js';

// Get all employees
export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get an employee by id
export const getEmployeeById = async (req, res) => {
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
export const createEmployee = async (req, res) => {
    const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;
    if (!first_name || !last_name || !email || !position || !salary || !date_of_joining || !department) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const employee = new Employee({ first_name, last_name, email, position, salary, date_of_joining, department });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully', id: employee._id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an employee
export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const {position, salary} = req.body;
    if (!position || !salary) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const employee = await Employee.findByIdAndUpdate(
            id,
            {  position, salary },
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
export const deleteEmployee = async (req, res) => {
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