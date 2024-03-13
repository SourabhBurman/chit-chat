import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';

const useLogout = () => {
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async()=> {
    setLoading(true);
    try{
      let res = await axios.post("http://localhost:8080/users/logout",{
        headers: {
          "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem('chitchattoken'))}`
      }
      });
      if(res.data.error) {
        throw new Error(res.data.error);
      }
      toast.success(res.data.msg);
      sessionStorage.removeItem('chitchatuser')
      sessionStorage.removeItem('chitchattoken')
      setAuthUser(null);
      navigate('/')
    } catch(error) {
      toast.error(error.message)
    } finally{
        setLoading(false);
    }
  }

  return {loading,logout};
  
}

export default useLogout