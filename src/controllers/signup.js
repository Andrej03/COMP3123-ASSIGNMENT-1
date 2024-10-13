import express from 'express';
import User from '../models/User.js';
import { hashPassword } from '../misc/hashedPassword.js';
import { validateSignup, validateResult } from '../misc/validator.js';
const router = express.Router();

router.post('/', validateSignup, validateResult, async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }    
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;

