import express from "express";
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import cors from 'cors';
import {router as userRoutes} from "./routes/userRoutes.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);

app.listen(5000,()=>{
  connectDB();
console.log("server starts at port 5000");
})