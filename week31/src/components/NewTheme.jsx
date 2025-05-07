import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import '../App.css'

const initialState = {
    books:[],
    loading: true,
    error:'',
}

function reducer(state,action){
    switch(action.type){
        case  'axios_start':
            return {...state, loading:true}
        case 'axios_get':
            return {...state, loading:false, books: action.books}
        case 'axios_error':
            return {...state, loading:false, error: action.error}
        default: 
            return state
    }
}
export default function NewTheme() {
    

    const[state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        dispatch({type:'axios_start'})
       async function fetchData(){
        try {
            let response = await axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books')
          
            dispatch({type:'axios_get', books: response.data})
            
            
        } catch (err) {
            dispatch({type:'axios_error', error: err.message})
        }
       }
       fetchData()
    },[])
  return (
    <div>
    {state.loading && <p>Loading...</p>}
    {state.error && <p style={{color:'red'}}>{error}</p>}
    {state.books && 
    state.books.map(kitap=>{
        return(
            <div key={kitap.id}>
                <h3>{kitap.title}</h3>
                <p>{kitap.description}</p>
               <img src={kitap.image} alt="" />
            </div>
        )
    })}
    </div>
  )
}
