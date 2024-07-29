const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "others"]
    },
    profilePic: {
        type: String,
        default: "",
    }
});

const userModel = mongoose.model("user", userSchema)

module.exports = { userModel }