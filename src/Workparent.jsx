import React from 'react'
import img1 from './image1.jpg'
import img2 from './image2.jpg'
import img3 from './image3.jpg'
import img4 from './image4.jpg'
import img5 from './image5.jpg'
import img6 from './image6.jpg'
import './workstyle.css'
import Workchild from './Workchild.jsx'

const Workparent = () => {
return (
<div className='main'>
<div className='main1'>
<div className='d1'><Workchild image={img1} name={"Adam jonson"} department={"Devoloper"}></Workchild></div>
<div className='d2'><Workchild image={img2} name={"Linda Larson"} department={"Manager"}></Workchild></div>
<div className='d3'><Workchild image={img3} name={"Marry hudson"} department={"Devoloper"}></Workchild></div>
</div>
<div className='main2'>
<div className='d4'><Workchild image={img4} name={"Nina Hudson"} department={"Devoloper"}></Workchild></div>
<div className='d5'><Workchild image={img5} name={"Margo Larson"} department={"Manager"}></Workchild></div>
<div className='d6'><Workchild image={img6} name={"Nicole Scavo"} department={"Manager"}></Workchild></div></div>
</div>
  )
}
export default Workparent