import React from 'react';
import './style.css';
import {useState} from 'react'

export default function App() {
  
  const [counter,setCounter]=useState(6)
   

   const addvalue=()=>{

    setCounter(counter+1)
     
   }

   const removevalue=()=>{
      
     if(counter==0){
setCounter(0)
     }else{
       setCounter(counter-1)
     }
   }
  return (
    <div >
     <h1>counter value {counter} </h1>
     
     <div className='box'>
     <button className='left' onClick={addvalue}>add value</button>
     <button className='right' onClick={removevalue}>remove value</button>

     </div>
    </div>
  );
}
