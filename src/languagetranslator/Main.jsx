import { useContext } from "react"
import Context from './Context'
import './style'

const Main=()=>{
        const value=useContext(Context)            
        console.log(value);
return (

<div className={value.switcher=='english'?'malayalam':'english'}>
  <button onClick={value.toggleswitcher}>click</button>
</div>    

 )
}
  export default Main