import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        console.log("MONGO_URI:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    }
    catch(error){
       console.log(error);
    }
}
export default connectDB;