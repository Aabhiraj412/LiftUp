import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MongoDB_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;