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
    website:{
        type:String 
    },
    clubl:{
        type:String 
    },
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