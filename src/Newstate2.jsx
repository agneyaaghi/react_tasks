import React, { useState } from 'react'
import { data } from 'react-router-dom';

const Newstate2 = () => {
              const[data,setData]=useState(1);
              let increment=()=>{
                           setData(data*2)
              }
              let decrement=()=>{
                           setData((data-2)*2)
              }
                    
                  
  return (
            <div>
                    <h5>{data}</h5>
                    <button onClick={increment}>increment</button>
                    <button onClick={decrement}>decrement</button>
            </div>
    
  )

}
export default Newstate2