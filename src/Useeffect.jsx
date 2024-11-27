import React, { useState } from 'react'
const Effect = () => {
                    const[count,setCount]=useState(0)  
                    const[count1,setCount1]=useState(0)
                    // Effect(()=>{
                    //                     {console.log("running")}  
                    // },[]) 
  return (
    <div><h2>{count}</h2>
    <button onclick={()=>setCount(count+1)}>increment</button>
    <h2>{count1}</h2>
    <button onclick={()=>setCount1(count1+1)}>increment</button>
</div>
  )
}

export default Effect