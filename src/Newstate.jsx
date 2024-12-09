import React, { useState } from 'react'

const Newstate=()=>{
                    const[data,setData]=useState(0)
                    let increment=()=>{
                                        setData(data+1)
                    }
                    let decrement=()=>{
                                        setData(data-1)
                    }
  return(
    <div>
                    <h2>{data}</h2>
                    <button onClick={increment}>increment</button>
                    <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Newstate