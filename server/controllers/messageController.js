// import { messageModel } from "../model/messageModel.js"

const conversationModel = require("../models/conversationModel");
const { userModel } = require("../models/userModel");
const messageModel = require("../models/messageModel")

const sendMessageController = async (req, res) => {
    try {
        const { receiverId } = req.params;
        const senderId = req.userId;
        const { message } = req.body;
        // const newMessage = new messageModel({ receiverId, senderId, message });
        // await newMessage.save();
        // res.status(200).send({ message: "Message Successfully Sent", success: true });

        let conversation = await conversationModel.findOne({ participants: { $all: [ senderId, receiverId ]}})
        if(!conversation) {
            conversation = await conversationModel.create({ participants: [ senderId, receiverId ]})
        } 
        const newMessage = new messageModel({ senderId, receiverId, message })
        conversation.messages.push(newMessage._id)
        // await newMessage.save()
        // await conversation.save()
        Promise.all([ newMessage.save(), conversation.save() ])
        
        //  socket.io functionalities Here 

        res.status(200).send({ message: "Message Successfully Sent", success: true });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error", success: false });
    }
};


const receiveMessageController = async(req, res) => {
    // res.send("receiveController")
    try {
        const { receiverId } = req.params;
        const senderId = req.userId;
        
        const conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        } ).populate("messages")
        if(!conversation)
            return res.status(200).json([])

        res.status(200).json({ messages: conversation.messages })
    }
    catch(error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error", success: false });
    }
}

const chatController = async(req, res) => {
    try{
        const userId = req.userId
        const user = await userModel.findById(userId)
        const chatUsers = await userModel.find({ username: { $ne: user.username } })
        res.status(200).send({ chatUsers })
    }
    catch(error){
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error", success: false });
    }
}

module.exports = { sendMessageController,receiveMessageController, chatController}

 