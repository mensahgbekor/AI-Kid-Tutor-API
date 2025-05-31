import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";


// Initialize app
const app = express();

// Connect to database
await mongoose.connect(process.env.MONGODB_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(userRouter)


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});