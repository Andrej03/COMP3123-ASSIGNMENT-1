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

// mongodb://andrejbach05:Z9GOL4CyvSmJHHk8@cluster0-shard-00-00.mongodb.net:27017,cluster0-shard-00-01.mongodb.net:27017,cluster0-shard-00-02.mongodb.net:27017/101417557_comp3123_a1?ssl=true&replicaSet=atlas-xxxx-shard-0&authSource=admin&retryWrites=true&w=majority
