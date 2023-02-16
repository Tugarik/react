// const mongoose = require("mongoose");
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
});

export default mongoose.model('User', UserSchema);