import { useState } from "react"
import Context from '.Context'

const Provider=({children})=>{
const[switcher,setswitcher]=useState('english')
let toggleswitcher=()=>{
setswitcher(switcher==='english'?'malayalam':'english')             
}  
return(
<div>
  <Context.Provider value={{switcher,toggleswitcher}}>
  {children}  
  </Context.Provider>             
</div>
)                  
}

export default Provider