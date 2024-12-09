import React, { useState } from 'react'
const Formone=()=>{
const[data,setdata]=useState('')
const handlechange=(event)=>{
setdata({...data,[event.target.name]:event.target.value})
}
const handlesubmit=async(event)=>{
event.preventDefault('')
setdata(data)
console.log(data);                
}
return (
  <div>
    <form onSubmit={handlesubmit} action="">
    <label>name</label>
    <input onChange={handlechange} type="text" name='name'/>
    <button>submit</button>
    </form>
  </div>
  )
}
export default Formone