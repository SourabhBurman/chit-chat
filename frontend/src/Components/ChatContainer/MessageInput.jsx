import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import useSendMessage from '../../Hooks/useSendMessage';

const MessageInput = () => {
    const[mssg , setmssg] = useState("");
    const {loading,sendMessages} = useSendMessage();
    const formSubmit = async (e)=> {
        e.preventDefault();
        if(!mssg) {
            return;
        }
        await sendMessages(mssg);
        setmssg("")
    }
    return (
        <form className='px-4 my-3 mt-1' onSubmit={formSubmit}>
            <div className="join w-full">
                <button className="btn input input-bordered join-item "><IoAddOutline /></button>
                <input className="input input-bordered grow join-item" value={mssg} placeholder="Enter your message" onChange={(e)=>setmssg(e.target.value)}/>
                <button className="btn input input-bordered join-item bg-yellow-700 text-zinc-900 hover:text-zinc-200" type="submit"><IoSendSharp className='w-6 h-6' /></button>
            </div>
        </form>
    )
}

export default MessageInput