import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected...`);
    } catch (error) {
        console.log("MongoDB conection error: ", error);
    }
}

export default connectDB;