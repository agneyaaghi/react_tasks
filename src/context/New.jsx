import React, { useContext } from 'react'
import Themecontext from './Themecontext'
import './style.css'

const New = () => {
                    const value=useContext(Themecontext)
                    console.log(value);
                    
  return (
    <div className={value.theme=='light' ? 'light' :'dark'} >
      <button onClick={value.toggletheme}>click</button>
    </div>
  )
}

export default New