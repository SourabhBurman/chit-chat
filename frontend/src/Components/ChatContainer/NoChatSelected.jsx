import React, { useContext } from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { AuthContext } from '../../AuthContext/AuthContext';

const NoChatSelected = () => {
  const {authuser} = useContext(AuthContext);
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='text-center sm:text-lg md:text-xl text-zinc-200 p-4 font-semibold flex flex-col items-center gap-2'>
       <p className=''>👋Welcome {authuser.fullname}</p>
       <p className=''>Select a chat to start a conversation.</p>
       <IoIosChatboxes className='h-12 w-12'/>
        </div>
    </div>
  )
}

export default NoChatSelected