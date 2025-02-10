import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    reg: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['Contributor','Club Member'],
        required:true
    },
    profile:{
        members:[{type:String}],
        skills:[{type:String}],
        previous:{type:String}, // URL to resume file
        //resumeOriginalName:{type:String},
        club:{type:mongoose.Schema.Types.ObjectId, ref:'Club'}, 
        profilePhoto:{
            type:String,
            default:""
        }
    },
},{timestamps:true});
export const User = mongoose.model('User', userSchema);