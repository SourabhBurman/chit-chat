import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Chatbox from '../Components/ChatContainer/Chatbox'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-zinc-600/30 bg-clip-padding backdrop-blur-lg'>
        <Sidebar />
        <Chatbox />
    </div>
  )
}

export default Home