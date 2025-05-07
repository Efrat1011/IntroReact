import React from 'react'
import { useForm } from './useForm'

export default function CustomHook() {
    let {handleSubmit,handleChange} = useForm({username:"",email:""})
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input 
          type="text" 
          name='username' 
          placeholder='Enter user name.....'
          onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name='email' 
          placeholder='example @gmail.com....'
          onChange={handleChange}/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}
