import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        THIS IS ABOUT PAGE
        <Link to={'/main'}>LogOut</Link>
  </div>
  )
}
