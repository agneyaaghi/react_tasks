import React from 'react'
import './workstyle.css'
const Taskchild = (props) => {
return (
<div>
<div><img className="imagestyle" src={props.image} height="200px" width="200px"></img></div>  
<h3>{props.name}</h3>
<h4>{props.email}</h4>
<button>{props.button}</button>
</div>
)
}

export default Taskchild