import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../Hooks/useGetConversation'

const AllConversation = () => {
  const {loading,conversations} = useGetConversation();
  // console.log(conversation);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation,index)=> <Conversation key={conversation._id} conversation={conversation} lastIdx={index==conversations.length-1}/>)}
    </div>
  )
}

export default AllConversation