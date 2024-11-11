import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js"
import { connectDB } from "./utils/db.js"

import cors from "cors"
dotenv.config()

const app = express()
const port =process.env.PORT
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',  // Allow your frontend origin
    credentials: true                         // Allow cookies to be sent
  }));
connectDB()
app.use('',userRouter)



app.listen(port,()=>{
    console.log(`Running in server:${port}`)
})