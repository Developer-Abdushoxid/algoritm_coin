import { Schema, model } from 'mongoose';

const MentorSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    displayNmae: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
},{ timestamps: true});

export const Mentor = model('mentor', MentorSchema)