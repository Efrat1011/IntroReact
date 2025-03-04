import React from 'react'
import '../index.css'
 
export default function ProfileCard(props){
    return(
        <div>
            <h1>Менің визит картам</h1>
    <div className="card">
        <img src={props.image} alt="profile" width="100" />
        <p><strong>{props.name}</strong></p>
        <p>{props.bio}</p>
        <p>{props.city}</p>
    </div>
        </div>
    )
}
