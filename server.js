import express from 'express';
import cors from 'cors';
import connectDb from './src/database/mongodb.js';
import userRouter from './src/routes/userRoute.js';
import employeeRouter from './src/routes/employeeRoute.js';
import loginRouter from './src/controllers/login.js';
import signupRouter from './src/controllers/signup.js';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// Route connections
app.use('/api/v1/user/signup', signupRouter);
app.use('/api/v1/user/login', loginRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', employeeRouter);


// Server start with database connected
const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
};

startServer(); 