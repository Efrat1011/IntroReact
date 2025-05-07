import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../components/AuthProvider'

export default function Login() {

    const[login,setLogin] = useState('')
    const[password,setPassword]=useState('')
    let navigat = useNavigate()
    let {setIsAuthenticated} = useContext(AuthContext) 
    const handelSubmit = (e) =>{
        e.preventDefault()
        let user = {login,password}
        if(user){
            setIsAuthenticated(true)
            localStorage.setItem('user',JSON.stringify(user))
            navigat('/home')
        }
    }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="">Login</label><br />
        <input 
        type="email"
        placeholder='Enter Email'
        onChange={(e)=>setLogin(e.target.value)} /><br /><br />
        <label htmlFor="">Password</label><br /> 
        <input 
        type="Password"
        placeholder='Enter Password'
        onChange={(e)=>setPassword(e.target.value)} /><br /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}