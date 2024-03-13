import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../AuthContext/SocketContext'
import useConversation from '../Zustand/useConversation';
import tone from '../assets/sound/tones.mp3'

const useListenMessages = () => {
  const {socket} = useContext(SocketContext);
  const {messages,setMessages} = useConversation();
 
  useEffect(()=> {
    socket?.on('newMessage',(newMessage)=> {
        const sound = new Audio(tone);
        sound.play()
        setMessages([...messages,newMessage])
    })

    return ()=> {
        socket?.off('newMessage')
    }
  },[socket,messages,setMessages])
}

export default useListenMessages