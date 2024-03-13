import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './AuthContext/AuthContext'
import { SocketContextProvider } from './AuthContext/SocketContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <SocketContextProvider>
    <App />
    </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
