import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function handleError ({username,fullname,password,confirmPassword,gender}) {
    if(!username || !fullname || !password || !confirmPassword || !gender) {
        toast.error("Please fill all input field")
        return false;
    }
    if(password != confirmPassword) {
        toast.error("Password does not match")
        return false;
    }
    return true;
}

const useSignup = () => {
 const [loading,setLoading] = useState(false);
const navigate = useNavigate();

 const signup = async({username,fullname,password,confirmPassword,gender}) => {
   const success = handleError({username,fullname,password,confirmPassword,gender});
   if(!success) {
    return;
   }
   setLoading(true);
   try{
      let res =await axios.post('https://chit-chat-lrej.onrender.com/users/signup',{
        username,fullname,password,confirmPassword,gender
      })
      if(res.data.error) {
        throw new Error(res.data.error)
      }
    toast.success(res.data.msg)
    navigate('/')
   } catch(error) {
     toast.error(error.message)
   } finally {
    setLoading(false);
   }
 }

 return {loading , signup}
}

export default useSignup