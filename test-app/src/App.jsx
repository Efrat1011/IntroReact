import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogPost from './components/BlogPost'
import AuthorDetails from './components/AuthorDetails'
import Nav from './components/Nav'
import './App.css'

export default function App() {
  const posts = [
    { 
      id:1,
      title:"React-тің негіздері",
      content:"React-бұл интерфейстерді құруға арналған күшті кітапхана"
    },
    {
      id:2,
      title:"Компоненттер мен Props",
      content:"Компоненттер - бұл React-та қайта қолданылатын UI бөліктері"
    }
  ]
  const author =
    {
      name:"Efrat Nassyrov",
      bio:" Efrat Nassyrov Amjilt Cyber school студенті"
    }
  return (
    <>
    <Header/>
    <Nav/>
    <div className='blog-box'>
      {posts.map(post =>(
        <BlogPost key={post.id} title ={post.title} content ={post.content}/>
      ))}
      <AuthorDetails name={author.name} bio={author.bio}/>
    </div>
    <Footer/>
    </>
  )

  }
  



