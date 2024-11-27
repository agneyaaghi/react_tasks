import React from 'react'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import './Taskstyle.css'
import Taskchild from './Taskchild'
const Taskparent = () => {
  return (
                    <div className='main'>
                    <div className='main1'>
                       <div><Taskchild image={image1} name={"Bernice Chavez"} email={"@tinyelephant696"} button={"MEET BERNICE"}></Taskchild></div>
                       <div><Taskchild image={image2} name={"Mathys Michel"} email={"@beautifulgorilla557"} button={"MEET MATHYS"}></Taskchild></div>
                       <div><Taskchild image={image3} name={"Albert Flores"} email={"@bigcat981"} button={"MEET ALBERT"}></Taskchild></div>
                    </div>
                    <div className='main2'>
                         <div><Taskchild image={image4} name={"Vidal Novaes"} email={"@lazymeercat384"} button={"MEET VIDAL"}></Taskchild></div>
                         <div><Taskchild image={image5} name={"Ali Abadan"} email={"@orangecat933"} button={"MEET ALI"}></Taskchild></div>  
                         <div><Taskchild image={image6} name={"Rafael Velasco"} email={"@yellowbear"} button={"MEET RAFAEL"}></Taskchild></div>         
                    </div>
                    </div>
  )
}

export default Taskparent