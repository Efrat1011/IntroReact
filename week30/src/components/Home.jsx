import React, {useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../components/AuthProvider'

export default function Home() {

    const [adam, setAdam] = useState({})
    let {isAuthenticated,setIsAuthenticated} = useContext(AuthContext)
    let naviget = useNavigate()
    const logout =()=>{

        localStorage.removeItem('user')
        setIsAuthenticated(false)
        naviget('/')
    }

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        setAdam(user)
    },[])

  return (
    <div>
        {isAuthenticated ?
        (
            <div>
                <h1>You are logges in!</h1>
                <p>{adam.login}</p>
                <button onClick={logout}>Logout</button>
            </div>
        )
        :
        (
            <p style={{color:"red"}}>Ен алдымен жүйеге кіру қажет</p>
        )
    }
    </div>
  )
}