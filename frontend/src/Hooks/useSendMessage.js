import { useState } from "react"
import useConversation from "../Zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessages = async (message) => {
        setLoading(true);
        try {
            let res = await axios.post(`https://chit-chat-lrej.onrender.com/messages/send/${selectedConversation._id}`, { message }, {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem('chitchattoken'))}`
                }
            });
            console.log(res.data);
            if (res.data.error) {
                throw new Error(res.data.error);
            }
            setMessages([...messages, res.data.newMessage])
        } catch (error) {
            toast.error(error.message)
        }
    }
    return { loading, sendMessages }
}

export default useSendMessage