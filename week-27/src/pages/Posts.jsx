import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../component/NavBar'

export default function Home() {
  let [posts,setPosts] = useState([])

  async function fetchData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      if (!response.ok){
        throw new Error("Suranysta qate bar!")
      }
      let data = await response.json()
      if(data) {
        setPosts(data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
  <>
    <NavBar/>
    <h1>Barlyq posttar</h1>
    {posts.map((post)=>{
      
      return  <li key={post.id}>
        <h3>{post.title}</h3>
        <Link to={`/posts/${post.id}`}>Толығырақ алу</Link>
      </li>
     
    })}
  </>
  )
}
