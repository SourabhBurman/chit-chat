import { useEffect, useState } from "react"
import useConversation from "../Zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";


const useGetMessage = () => {
 const [loading,setLoading] = useState();
 const {messages,setMessages,selectedConversation} = useConversation();

 useEffect(()=> {
    const getMsg = async ()=> {
     setLoading(true);
     try{
        let res = await axios.get(`http://localhost:8080/messages/get/${selectedConversation._id}`,{
            headers: {
                "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem('chitchattoken'))}`
            }
        })
        
        if(res.data.error) {
            console.log(res.data.error);
        }
        setMessages(res.data.convo);
     } catch(error) {
        // toast.error(error.message)
        console.log(res.data.error);
     } finally {
        setLoading(false);
     }
    }
    if(selectedConversation?._id) getMsg();
},[selectedConversation])
return {loading,messages}
}

export default useGetMessage