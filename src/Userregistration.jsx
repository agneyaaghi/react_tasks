import React from 'react'
import { useState } from 'react'
const Userregistration = () => {
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
    <form className='px-32 pt-14 pb-52 bg-orange-100' onSubmit={handlesubmit} action="">
    <label className='-font-medium'>USER REGISTRATION</label><br></br><br></br><br></br>
    <label>username </label>
    <input onChange={handlechange} type="Text" name='name'/><br></br><br></br>
    <label>Email </label>
    <input onChange={handlechange} type="Email" name='email'/><br></br><br></br>
    <label>Password </label>
    <input onChange={handlechange} type="Password" name='password'/><br></br><br></br>
    <label>Confirm password </label>
    <input onChange={handlechange} type="Password" name='confirm password'/><br></br><br></br>
    <label>Phone number </label>
    <input onChange={handlechange} type="Number" name='number'/><br></br><br></br>
    <label>Address </label>
    <input onChange={handlechange} type="Textarea" name='Address'/><br></br><br></br>
    <label>Date of Birth </label>
    <input onChange={handlechange} type="date" name='date'/><br></br><br></br>
    <button className="bg-black text-gray-50 p-2 rounded-xl" type='submit'>submit</button>
    </form>
    </div>
  )
}
export default Userregistration