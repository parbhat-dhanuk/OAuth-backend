import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const conn=process.env.DB_URI

export const connectDB=()=>{
    mongoose.connect(conn)
    console.log("Database connected successfully")
}

