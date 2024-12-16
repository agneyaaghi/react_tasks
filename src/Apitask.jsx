import React, { useState } from 'react'
import './apitask.css';
import axios from 'axios';

export const Apitask = () => {
const[data,setdata]=useState([])  
const fetchdata = async ()=>{
const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
setdata(response.data)         
} 
console.log(data)        
  return (
    <div className='bg-red-400'>
      <div className='justify-center flex'>
      <button className='bg-cyan-950 text-red-100 pt-3 pb-3 ps-5 pr-5 mt-5' 
      onClick={fetchdata}>click</button>
      </div>
      {data.map((item)=>(
        <div className='justify-center flex'>
               <div className='bg-orange-300 text-yellow-950 text-[20px]
                p-6 m-4 h-50 w-[550px] flex flex-row justify-center'>
                    <div className='flex flex-col'><h2>{item.userId}</h2>
                    <h2>{item.id}</h2>
                    <h2>{item.title}</h2>
                    <h2>{item.completed}</h2></div>
               </div>
        </div>
      ))}       
    </div>
  )
}
export default Apitask