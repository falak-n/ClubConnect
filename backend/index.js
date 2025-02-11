import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import clubRoute from "./routes/club.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();
connectDB();
const PORT=process.env.PORT || 8000;
const app=express();
const _dirname = path.resolve();





app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
const corsOptions={
     origin:'http://localhost:5173',
    // origin:'https://clubconnect-4t81.onrender.com/',
    credentials:true
}
app.use(cors(corsOptions));

 
app.use("/api/v1/user", userRoute);
app.use("/api/v1/club",clubRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
});

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})