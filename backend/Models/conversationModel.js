import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    participants : [{type : mongoose.Schema.Types.ObjectId, ref: "users"}],
    messages : [{type: mongoose.Schema.Types.ObjectId, ref: 'messages', default:[]}]
},{
    timestamps: true, versionKey: false
})

const ConversationModel = mongoose.model('coversations',conversationSchema);

export default ConversationModel