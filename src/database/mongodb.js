import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://andrejbach05:D87jGuFi5jXMSqpu@cluster0.qslf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDb = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
};

export default connectDb;
