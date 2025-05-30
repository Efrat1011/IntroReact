import React from "react";
import '../index.css'

export default function BookCard(props){
    const handleClick = () =>{
        alert('button clicked')
    }
    return(
        
            <div className="book-card">
                <img src={props.image} alt="profile" width="100" className="book-image"/>
                <h2>{props.name}</h2>
                <p className="book-author">{props.avtor}</p>
                <p className="book-year">{props.year}</p>
                <button onClick={handleClick}>Click me</button>
            </div>
        
       
    )
}