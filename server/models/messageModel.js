const mongoose = require("mongoose");

// Define the schema for messages
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",  // Reference to the user model
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",  // Reference to the user model
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Enable timestamps for createdAt and updatedAt fields

// Create the message model
const messageModel = mongoose.model("messages", messageSchema);

module.exports = messageModel;
