import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useLogin() {
 const [loading,setLoading] = useState(false);
 const navigate = useNavigate();
 const {setAuthUser} = useContext(AuthContext);

 function handleError ({username,password}) {
    if(!username|| !password ) {
        toast.error("Please fill all input field")
        return false;
    }
    return true;
}

 const login = async ({username,password}) => {
    setLoading(true);
    const success = handleError({username,password});
   if(!success) {
    return;
   }
    try{
      let res =await axios.post("http://localhost:8080/users/login",{username,password});
      if(res.data.error) {
        // throw new Error(res.data.error);
        toast.error(res.data.error);
        return;
        // console.log(res.data.error);
      }
      // console.log(res.data);
      toast.success(res.data.msg);
      // console.log(res.data);
     sessionStorage.setItem('chitchattoken',JSON.stringify(res.data.token));
     sessionStorage.setItem('chitchatuser',JSON.stringify(res.data.user));
      navigate('/home')
      setAuthUser(JSON.parse(sessionStorage.getItem('chitchatuser')));
    } catch(error) {
        toast.error(error.error || error.message);
    } finally {
        setLoading(false);
    }
 }
 return {loading,login};
}

export default useLogin