import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterslice.js'

export const Count = () => {
const count=useSelector((state)=>state.counter.count)
const dispatch=useDispatch()

return (
    <div>
                    <h2>{count}</h2>
                    <button onClick={()=>dispatch(increment())}>increment</button><br></br>
                    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}
