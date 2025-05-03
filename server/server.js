import express from 'express';
import connectDB from './db/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import "dotenv/config";
import AuthRouter from './routes/authRoutes.js';

const app = express();

// Middelwares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


// Routes
app.use("/api/auth", AuthRouter);


// Database Connection
connectDB().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on the PORT:${PORT}`);
    });
}).catch((error) => {
    console.log(`Failed to connect DB ... ${error}`);
})
