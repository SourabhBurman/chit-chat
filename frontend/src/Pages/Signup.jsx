import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../Hooks/useSignup';


const Signup = () => {
const [signupData, setSignup] = useState({username:"",fullname:"",password:"",confirmPassword:"",gender:""});
const {loading,signup} = useSignup();

const signupSubmit = async (e)=> {
    e.preventDefault();
    await signup(signupData)
    setSignup({username:"",fullname:"",password:"",confirmPassword:"",gender:""});
    
}

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-zinc-600/30 bg-clip-padding backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-zinc-300 mb-8'>Signup
                    <span className='text-yellow-700'>  Chit-Chat</span>
                </h1>
                <form onSubmit={signupSubmit}>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" required placeholder="Username" value={signupData.username} onChange={(e)=>setSignup({...signupData,username:e.target.value})}/>
                        </label>
                        <label className="input input-bordered flex items-center join my-2 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 ml-4"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className='grow join-item ml-2' required placeholder="FullName" value={signupData.fullname} onChange={(e)=>setSignup({...signupData,fullname:e.target.value})}/>
                            <select className='select select-bordered join-item' required value={signupData.gender} onChange={(e)=>setSignup({...signupData,gender:e.target.value})}>
                                <option value='not mentioned'>Gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" required placeholder="password" value={signupData.password} onChange={(e)=>setSignup({...signupData,password:e.target.value})}/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" required placeholder="Confirm Password" value={signupData.confirmPassword} onChange={(e)=>setSignup({...signupData,confirmPassword:e.target.value})}/>
                        </label>
                        <Link to="/" className='p-2 text-sm text-zinc-400 hover:text-yellow-700'>Already have an account?</Link>
                        <button type="submit" className="btn block m-auto mt-4 bg-yellow-700 text-zinc-900 font-bold hover:text-zinc-400">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup