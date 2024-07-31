const express = require("express")
const authMiddleware = require("../middleware/authMiddleware");
const { sendMessageController, receiveMessageController } = require("../controllers/messageController");
const messageRouter = express.Router();

// Demo route
messageRouter.get("/", (req, res) => {
    res.send("API is working in MessageRouter");
});

messageRouter.post("/send/:receiverId", authMiddleware, sendMessageController);
messageRouter.get("/receive/:receiverId", authMiddleware, receiveMessageController);

module.exports = messageRouter;
