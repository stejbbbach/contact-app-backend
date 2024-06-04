import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/contact_app');
    } catch (error) {
        console.error('Error while connecting to MongoDB: ' + error);
        throw error;
    }
};

export default connectToMongoDB;
