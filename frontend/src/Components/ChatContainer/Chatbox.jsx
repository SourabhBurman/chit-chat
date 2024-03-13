import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected';
import useConversation from '../../Zustand/useConversation';

const Chatbox = () => {
    
  const {selectedConversation,setSelectedConversation } = useConversation();

  useEffect(()=> {
    return ()=> {
      setSelectedConversation(null);
    }
  },[])
  return (
         <div className='md:min-w-[450px] flex flex-col'>
    {   !selectedConversation ?  <NoChatSelected /> : <> <div className='bg-yellow-700 text-zinc-900 px-4 py-2 mb-2'>
            <span className='label-text text-zinc-900'>To : </span>
            <span className='text-zinc-900 font-bold'>{selectedConversation.fullname}</span>
        </div>
        <Messages />
        <MessageInput />
        </>}
    </div>
  )
}

export default Chatbox