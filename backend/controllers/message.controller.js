import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;
    
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages");

        if(!conversation) {
            res.status(200).json({data: []});
        }

        const messages = conversation.messages

        res.status(200).json({data: messages});
    } catch (error) {
        console.error("Error getting messages: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
export const sendMessage = async (req, res) => {
    try {
        const {id: receiverId} = req.params;
        const {message} = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            $and: [
                {participants: {$all: [senderId, receiverId]}},
            ]
        });

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([
            newMessage.save(),
            conversation.save()
        ]);
        res.status(201).json({message: "Message sent successfully", data: newMessage});
       
    } catch (error) {
        console.error("Error sending message: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}