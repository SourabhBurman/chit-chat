import React from 'react'
import SearchInput from './SearchInput'
import AllConversation from './AllConversation'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../Hooks/useLogout';

const Sidebar = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='flex flex-col p-4 border-r border-yellow-700'>
        <SearchInput />
        <div className='divider px-3'></div>
        <AllConversation />
        {/* <div className='divider px-3'></div> */}
        <div className='mt-auto'>
         <TbLogout2 className='w-6 h-6 text-xinc-100 cursor-pointer' onClick={logout}/>
        </div>
    </div>
  )
}

export default Sidebar