import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/connectDB.js';


dotenv.config();

// Routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;


app.use("/api/auth/", authRoutes);
app.use("/api/message/", messageRoutes);
app.use("/api/users/", userRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});