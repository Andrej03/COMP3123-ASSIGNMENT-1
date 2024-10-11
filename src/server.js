const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDb = require('./database/mongodb');
const userRouter = require('./routes/userRoute');
const employeeRouter = require('./routes/employeeRoute');
const loginRouter = require('./controllers/login');
const signupRouter = require('./controllers/signup');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/signup', signupRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', employeeRouter);

app.listen(3000, async () => {
    await connectDb();
    console.log('Server started on port 3000');
});