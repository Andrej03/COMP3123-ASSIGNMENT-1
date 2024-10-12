import express from 'express';
const router = express.Router();
import User  from '../models/User.js';
import { hashPassword } from '../misc/hashedPassword.js';

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const hashedPassword = await hashPassword(password);
        const isMatch = await bcrypt.compare(hashedPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
