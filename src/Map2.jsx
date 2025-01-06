import React from 'react'

const Map2 = () => {
 const elements=[
 {name:"arya", dept:"python"},
 {name:"anu", dept:"flutter"},];

 const p={name:"jjj"}
  return (
    <div>
      {
      elements.map((items)=>(
                 <div> 
                    <h3>{items.name}</h3>
                    <h3>{items.dept}</h3>
                 </div>  
         ))
      }            
      {/* <h2>{p.name}</h2> */}
    </div>
  )
}

export default Map2