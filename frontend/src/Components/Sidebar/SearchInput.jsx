import React, { useState } from 'react'
import { MdPersonSearch } from "react-icons/md";
import useConversation from '../../Zustand/useConversation.js';
import useGetConversation from '../../Hooks/useGetConversation.js';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {selectedConversation,setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();

  const handleSubmit = (e)=> {
    e.preventDefault();
    // console.log(selectedConversation);
    if(!search) {
      return;
    }
       const convo = conversations.filter((con)=>con.fullname.toLowerCase().includes(search.toLowerCase()));
       if(convo) {
        setSelectedConversation(convo[0]);
        console.log(selectedConversation);
        setSearch("");
       } else {
        toast.error("No user found")
       }
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search' className='input input-bordered rounded-full' onChange={(e)=>setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-yellow-700 text-zinc-900 hover:text-zinc-200'>
        <MdPersonSearch className='w-5 h-5'/>
        </button>
    </form>
  )
}

export default SearchInput