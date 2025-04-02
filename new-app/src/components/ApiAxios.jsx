import React, { useEffect, useState } from 'react'
import axios  from 'axios'



export default function ApiAxios() {

    // async function fetchData () {
    //     try {
    //         let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         console.log(response.data);
            
    //     } catch (error) {
    //         if (error.status === 404) {
    //             console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
                
    //         }
    //     }
    // }
    // useEffect(()=>{
    //     fetchData()
    // },[])

    const [bodyText, setBodyText] = useState()
    const [titleText, setTitleText] = useState()
    const[message,setMessage] = useState('')
    const[data,setData] = useState()
    const [error,setError] =  useState()

    async function fetchData () {
        try {
            let response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
                title:titleText,
                userId:1,
                body: bodyText,
            })
            if(response.data){
                setMessage('Succesfully sent!')
                setData(response.data)
                setTitleText('')
                setBodyText('')
            }
        } catch (error) {
            if (error.message) {
                setError(error.message); 
            }else if (error.request){
                setError(error.request.status);
            }else{
                setError(error.name);
                
            }
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        fetchData()
        setMessage('Sending...')
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <label htmlFor="">Body text</label><br/> <br/>
        <input 
            type="text" 
            value={bodyText}
            placeholder='Enter body text' 
            onChange={(e)=>setBodyText(e.target.value)}/> <br/><br/>
        <label htmlFor="">Title text</label><br/> <br/>
        <input
            type="text" 
            value={titleText} 
            placeholder='Enter title text'
            onChange={(e)=>setTitleText(e.target.value)}/> <br/><br/>
        {error ? 
        (<p style = {{color:'red'}} >{error}</p>)
    :
        message && (<p style={{color:"green"}}>{message}</p>)   
    }
        <button type='submit'>Sent</button>
     </form>
     {data &&
     <div>
        <p>{data.id}</p>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
     </div>
     }
    </div>
  )
}
