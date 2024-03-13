import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId : {type : mongoose.Schema.Types.ObjectId , ref: "users" , required : true},
    receiverId : {type : mongoose.Schema.Types.ObjectId , ref: "users" , required : true},
    message : {type: String, required: true}
},{
    timestamps: true, versionKey: false
})

const MessageModel = mongoose.model('messages',messageSchema);

export default MessageModel