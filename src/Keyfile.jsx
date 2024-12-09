import React from 'react'
import {useState}from'react';
const Keyfile=()=>{
    const obj=[{id:1,names:"anu",age:20,qty:1},
              {id:2,names:"ammu",age:21,qty:1},
              {id:3,names:"arya",age:21,qty:1}];   
const[data,setdata]=useState(obj)           
console.log(data);

const change=(id)=>{
const newitem=data.map((item)=>
item.id===id?{...item,qty:item.qty+1}:item)
setdata(newitem)
}
return(
<div>
   {data.map((item)=>(
      <div key={item.id}>
      <h2>{item.id}</h2>
      <h2>{item.names}</h2>
      <h2>{item.age}</h2>
      <h2>{item.qty}</h2>
      <button onClick={()=>change(item.id)}>+</button><br></br>
    </div>
    ))}
  </div>
  )
}
export default Keyfile
