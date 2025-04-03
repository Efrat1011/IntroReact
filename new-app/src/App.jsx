import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetail from './pages/MovieDetail'
import Search from './components/Search'

export default function App() {
  const [movies,setMovies] = useState([])
  return (
    
    <BrowserRouter>
    <div className='app'>
      <h1 style={{textAlign:'center'}}>Movie search app</h1>
      <Search onSearch={setMovies}/>


      <Routes>
        <Route path='/' element={<MovieList movies={movies}/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
      </Routes>
    </div>
      
    </BrowserRouter>   
    
  )
}

