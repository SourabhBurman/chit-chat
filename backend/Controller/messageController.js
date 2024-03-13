import ConversationModel from "../Models/conversationModel.js";
import MessageModel from "../Models/messageModel.js";
import { getReceiverSocketId, io } from "../Socket/socket.js";

 

 const sendMessage = async (req,res)=> {
  try{
       const {message} = req.body;
       const {id : receiverId} = req.params;
       const senderId = req.user._id;
       
       let convo = await ConversationModel.findOne({participants: {$all : [senderId, receiverId]}})

       if(!convo) {
         convo = await ConversationModel.create({
            participants : [senderId, receiverId]
         })
       }
       const newMessage = new MessageModel({
        message,senderId,receiverId
       })

       convo.messages.push(newMessage._id)

    //    await newMessage.save();
    //    await convo.save();

    await Promise.all([newMessage.save(),convo.save()]);
      
    const recieverSocketId = getReceiverSocketId(receiverId);
    if(recieverSocketId) {
      io.to(recieverSocketId).emit('newMessage',newMessage);
    }

       res.status(200).send({msg: "msg sent", newMessage})
  } catch(error) {
    res.status(400).send({error})
  }
 }


 const getMessage = async (req,res)=> {
try{
const {id : otherUser} = req.params;
const senderId = req.user._id;
const conversation = await ConversationModel.findOne({
    participants : {$all : [otherUser, senderId]}
}).populate('messages')
if(conversation) {
  res.status(200).send({msg:"all messages",convo : conversation.messages})
} else {
  res.status(200).send({msg:"all messages",convo : []})
}

} catch(error) {
res.status(400).send({error})
}
 }
 export {sendMessage, getMessage}