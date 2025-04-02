import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
      Регистрация
      <form>
        <input type="text" placeholder='Name......'/>
        <input type="text" placeholder='Login....'/>
        <input type="text" placeholder='Password......'/>
      </form>
      <Link to={'/'}>Home</Link>
    </div>
  )
}
