import { createContext, useState } from "react"

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [authuser,setAuthUser] = useState(JSON.parse(sessionStorage.getItem('chitchatuser')) || {});
 return <AuthContext.Provider value={{authuser,setAuthUser}}>{children}</AuthContext.Provider>
}

export {AuthContext , AuthContextProvider}