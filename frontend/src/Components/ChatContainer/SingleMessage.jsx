import React, { useContext } from 'react'
import { AuthContext } from '../../AuthContext/AuthContext'
import useConversation from '../../Zustand/useConversation';

const SingleMessage = ({message}) => {
  const {authuser} = useContext(AuthContext);
  const {selectedConversation} = useConversation();
  const isFromMe = authuser._id == message.senderId

  const extractTime = (datefromdb)=> {
    const padZero = (num) => {
      return num < 10 ? '0' + num : num;
    };
   const date = new Date(datefromdb);
   const hours = padZero(date.getHours());
   const minutes = padZero(date.getMinutes());
   return `${hours} : ${minutes}`
  }
  return (
    
    <div className={`chat ${isFromMe?"chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="user" src={isFromMe? authuser.profilePic : selectedConversation.profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-zinc-100 ${isFromMe ? "bg-yellow-700":""}`}>{message.message}</div>
        <div className="chat-footer opacity-50 italic text-[10px]">
            {extractTime(message.createdAt)}
        </div>
    </div>
  )
}

export default SingleMessage