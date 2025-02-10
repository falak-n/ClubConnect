import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String, 
    },
    clubl:{
       type:String,
    },
    contact:{
        type:String 
    },
    coordinator:{
        type:String 
    },
    // clubl:{
    //     type:String 
    // },
    // logo:{
    //     type:String 
    // },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})
export const Club = mongoose.model("Club", clubSchema);