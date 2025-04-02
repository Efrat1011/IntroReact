
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Login({ setAuth }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setAuth(true); 
    navigate('/main'); 
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleClick}>Login</button>
      <p>
        Тіркелу үшін: <Link to="registered">Register</Link>
      </p>
    
      <Outlet />
    </div>
  );
}