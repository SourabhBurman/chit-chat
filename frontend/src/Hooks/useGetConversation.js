import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = ()=> {
    const [loading,setLoading] = useState(false);
    const [conversations,setConversations] = useState([]);

    useEffect(()=> {
       async function getConvo() {
        setLoading(true);
        try{
            let res = await axios.get('http://localhost:8080/allUsers',{
                headers:{
                    "Authorization" : `Bearer ${JSON.parse(sessionStorage.getItem('chitchattoken'))}`
                }
            });
            if(res.data.error) {
                throw new Error(res.data.error)
            }
            setConversations(res.data.allUsers)
        } catch(error) {
         toast.error(error.message)
        } finally {
            setLoading(false);
        }
       }
       getConvo()
    },[])

    return {loading,conversations};
}

export default useGetConversation