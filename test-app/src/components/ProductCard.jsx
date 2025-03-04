import React from "react"
import '../index.css'


export default function ProductCard(props){
    return(
        <div>
    <div className="card">
        <img src={props.image} alt="profile" width="100" />
        <p><strong>{props.name}</strong></p>
        <p>{props.price}</p>
        
    </div>
        </div>
    )
}
