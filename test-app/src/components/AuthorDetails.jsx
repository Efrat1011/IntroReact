import React from 'react'
import '../index.css'


const AuthorDetails = ({name,bio}) => {
    console.log("Name", name);
    console.log("Bio", bio);
    return(
      <div className='author-details'>
         <h3>Author: {name}</h3>
         <p>{bio}</p>
      </div>
       
    )
   }
   export default AuthorDetails;