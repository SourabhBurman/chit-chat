import React, { useEffect } from 'react'
import SingleMessage from './SingleMessage'
import useGetMessage from '../../Hooks/useGetMessage'
import { useRef } from 'react';
import useListenMessages from '../../Hooks/useListenMessages';

const Messages = () => {
    const {loading,messages} = useGetMessage();
    useListenMessages();
    const chatRef = useRef();
    useEffect(()=> {
        setTimeout(()=> {
            chatRef.current?.scrollIntoView({behavior:"smooth"})
        },50) 
    },[messages])
    return (
        <div className='p-4 pb-1 flex-1 overflow-auto'>
            {messages.map((msg,index)=> <div ref={chatRef} key={index}><SingleMessage  message={msg}/></div>)}
            {!loading && messages.length==0 && (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
       
    )
}

export default Messages