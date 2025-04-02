import {useState} from 'react'
import './App.css'
import TaskBox from './component/TaskBox'
import UseEffect from './component/UseEffect'
import Router from './component/Router'
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import Posts from './pages/Posts'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Main from './pages/Main'
import NavBar from './component/NavBar'
import PostDetails from './pages/PostDetails'
import DashBoard from './pages/DashBoard.jsx'
import Protected from './component/Protected.jsx'
import Registered from './pages/Registered.jsx'


function App() {
// const [isDark, setIsDark] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  return (
    <>


    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Защищенные маршруты */}
        <Route
          path="/posts"
          element={
            <Protected isAuth={isAuthenticated}>
              <Posts />
            </Protected>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <Protected isAuth={isAuthenticated}>
              <PostDetails />
            </Protected>
          }
        />
        <Route
          path="/main"
          element={
            <Protected isAuth={isAuthenticated}>
              <Main />
            </Protected>
          }
        />

         
         <Route path="/login" element={<Login setAuth={setIsAuthenticated}/>}>
          
          <Route path="registered" element={<Registered/>}/>
        </Route>

        
        <Route path="/" element={<Navigate to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  





























    {/* <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
      </Routes>
    </BrowserRouter> */}

   {/* <UseEffect/> */}
   {/* <TaskBox/> */} 
      {/* <div style={{
        backgroundColor: isDark? "black" : "white",
        color: isDark ? "white" : "black",
        height: "100vh",
        width: "100%",
    }}>
      <p>{isDark ? "🌑Dark-mode" : "☀Light-mode"}</p>  
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "☀Light-mode" : "🌑Dark-mode"} 
      </button>
    </div> */}
    </>
  
     
    
  )


}
export default App