import express from 'express';
import cors from 'cors';
// import mongoose from 'mongoose';
// import { connectDb } from './src/database/mongodb.js';
import userRouter from './src/routes/userRoute.js';
import employeeRouter from './src/routes/employeeRoute.js';
import loginRouter from './src/controllers/login.js';
import signupRouter from './src/controllers/signup.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/signup', signupRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', employeeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to database and start server
// try {
//   await connectDb();
//   app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
//   });
// } catch (error) {
//   console.error('Failed to connect to the database:', error);
//   process.exit(1);
// }