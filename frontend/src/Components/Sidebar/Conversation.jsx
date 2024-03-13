import React, { useContext } from 'react'
import useConversation from '../../Zustand/useConversation'
import { SocketContext } from '../../AuthContext/SocketContext';

const Conversation = ({conversation,lastIdx}) => {
   const {selectedConversation,setSelectedConversation } = useConversation();
   const isSelected = selectedConversation?._id == conversation._id;
   const {onlineUsers} = useContext(SocketContext);
   const isOnline = onlineUsers.includes(conversation._id)

   
    return (
        <>
            <div className={`flex gap-2 items-center justify-center ${isSelected? "bg-yellow-700" : "" } hover:bg-yellow-700 rounded p-2 py-1 cursor-pointer`} onClick={()=>setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt="user"/>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <p className='font-bold text-zinc-100'>{conversation.fullname}</p>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 px-2 h-1'></div>}
            
        </>
    )
}

export default Conversation