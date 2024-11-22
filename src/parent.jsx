import React from 'react'
import Child from './Child'
import img from './image1.jpg' 


export const Parent = () => {
  return (
    <div className='main'>
        <Child name={"anu"} age={"20"} image={img}></Child>
        <Child name={"athira"} age={"21"}></Child>
    </div>

  )
}
