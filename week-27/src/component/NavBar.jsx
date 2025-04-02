import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
      <Link to={'/posts'}>Posts</Link>
      <Link to={'/'}>Back to Login</Link>
    </nav>
  )
}
