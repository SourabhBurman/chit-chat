import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import toast, { Toaster } from 'react-hot-toast';

function App() {
 
  return (
      <div className="p-4 h-screen flex justify-center items-center">
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/home' element={<Home />}/>
     </Routes>
     <Toaster />
      </div>
  )
}

export default App
