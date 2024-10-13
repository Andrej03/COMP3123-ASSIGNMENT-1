import { check, validationResult } from 'express-validator';

export const validateSignup = [
    check('username')
        .isLength({ min: 8 })
        .withMessage('Username must be at least 8 characters long'),
    check('email')
        .isEmail()
        .withMessage('Please provide a valid email'),
    check('password')
        .isLength({ min: 10 })
        .withMessage('Password must be at least 10 characters long')
];

export const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }
    next();
};
