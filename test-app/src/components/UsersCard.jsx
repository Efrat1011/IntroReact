import React from "react";
import '../index.css'

export default function UsersCard(props){
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

