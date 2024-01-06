import React from 'react'
import loding from "./loding.jpg.gif";
 const Spinner =  () =>{
  
    return (
      <div className='text-center'>
        <img src= {loding} alt="loading" height={50}/>
      </div>
    )
  
}

export default Spinner