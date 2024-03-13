import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import io from 'socket.io-client';

const SocketContext = createContext();

const SocketContextProvider = ({children})=> {
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authuser} = useContext(AuthContext)

    useEffect(()=> {
         if(authuser) {
            const socket = io("http://localhost:8080",{
                query :{userId : authuser._id}
            });
            setSocket(socket);

            //socket.on() listen to the events both front end back
            socket.on("getOnlineUsers",(users)=> {
                setOnlineUsers(users)
            })

            return ()=> socket.close()
         } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
         } 
    },[authuser])

return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
}

export {SocketContext,SocketContextProvider};