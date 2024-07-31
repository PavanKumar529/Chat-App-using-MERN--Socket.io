const mongoose = require("mongoose")

// Define the schema for conversations
const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            required: true,
            ref: "users"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "messages",
            default: [],
        }
    ]
}, { timestamps: true }); // Enable timestamps for createdAt and updatedAt fields

// Create the conversation model
const conversationModel = mongoose.model("conversation", conversationSchema);

module.exports = conversationModel