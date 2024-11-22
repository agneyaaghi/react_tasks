import React from 'react'

const Child = (props) => {
  return (
    <div>
         <h3>{props.name}</h3>
         <h4>{props.age}</h4>
       <div><img src={props.image} height="200px" width="300px"></img></div>  
    </div>
  )
}

export default Child