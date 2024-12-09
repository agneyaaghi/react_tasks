import React, { useState } from 'react'
const Userlogin = () => {
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
    <div className='mx-80 mr-80 mt-40 bg-red-500 flex justify-center'>
         <form className='pt-5 px-6' onSubmit={handlesubmit} action="">
         <label>name</label>
         <input onChange={handlechange} type="name" name='name'/><br></br><br></br>
         <label>email</label>
         <input onChange={handlechange} type="email" name='email'/><br></br><br></br>
         <label>password</label>
         <input onChange={handlechange} type="password" name='password'/><br></br><br></br>
         <button className='text-white bg-black px-4 pr-4 pt-2 pb-2 mb-3' type="submit">Login</button>
         </form>
    </div>
  )
}
export default Userlogin