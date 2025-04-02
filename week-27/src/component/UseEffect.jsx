import React,{ useState, useEffect } from "react";
import '../index.css'


export default function UseEffect(){
  const [count, setCount] = useState(()=>{
    const savedCount = localStorage.getItem("count")
    return savedCount != null ? parseInt(savedCount):0
  })  
  

  useEffect(()=>{
    localStorage.setItem("count",count)
  },[count]);


  return(
    <div className="container">
        <h2>Count:{count}</h2>
        <button className="filter-box" onClick={()=> setCount(count+1)}>+</button>
        <button className="filter-box" onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}