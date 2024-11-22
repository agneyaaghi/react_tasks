import React from 'react'
import './workstyle.css'
const Workchild = (props) => {
  return (
<div>
<div><img className="imgstyle" src={props.image} height="200px" width="200px"></img></div>  
<h3>{props.name}</h3>
<h4>{props.department}</h4>
</div>
  )
}
export default Workchild