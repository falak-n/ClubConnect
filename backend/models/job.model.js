import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    // salary: {
    //     type: Number,
    //     required: true
    // },
    // experienceLevel:{
    //     type:Number,
    //     required:true,
    // },
    clubl: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    club: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true
    },
    created_by: {   // yhn pe admin hoga 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});
export const Job = mongoose.model("Job", jobSchema);