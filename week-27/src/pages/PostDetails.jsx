import React, { useEffect, useState } from 'react'
import NavBar from '../component/NavBar'
import { Link, useParams } from 'react-router-dom'

export default function PostDetails() {
    const {id} = useParams();

    const [post, setPost] = useState()
    async function fetchData() {
        try {
          let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          if (!response.ok){
            throw new Error("QATE!")
          }
          let data = await response.json()
          if(data) {
            setPost(data)
          }
        } catch (error) {
          console.log(error);
          
        }
      }
      useEffect(()=>{
        fetchData()
      },[id]);
      if(post){
        return (
            <div>
                <Link to={"/posts"}> Nazad</Link>
              <h1>Tolyq aqparat</h1>
                <div>
                <h2>{post.title}</h2>
               <p> {post.body}</p>
                </div>
            </div>
           
          )
      }

}
