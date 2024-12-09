import React from "react";
import './Startup.css'
import img1 from './estartupimg.jpg';
import img2 from './estartupimg2.2.jpg'
import img3 from './estartupimg2.3.jpg'
import img4 from './estartupimg2.4.jpg'
import img5 from './estartupimg2.1.jpg'
const Startup = () => {
  return (
    <div>
      <div className="flex ms-32 mt-7">
        <div>
          <h3 className="font">eStartup</h3>
        </div>
        <div className="ms-96">
          <button className="p-4 text-lime-700 font-bold">Home</button>
          <button className="p-4 font-bold">About</button>
          <button className="p-4 font-bold">Services</button>
          <button className="p-4 font-bold">Features</button>
          <button className="p-4 font-bold">Pricing</button>
          <button className="p-4 font-bold">Dropdown</button>
          <button className="p-4 font-bold">Contact</button>
        </div>
      </div>
      <div className="bagrnd">
           <div className="flex mt-7 p-20 pb-28">
                 <div className="ms-8 mt-12">
                    <h1 className="fontstyle">eStartup</h1>
                    <p className="mt-5">sed autem laudantium dolores. voluptatem 
                      itaque ea consequatur evenient.<br></br> 
                      eum quas beatae cumque eum quaerat</p>
                    <button className="btn1">get started</button>  
                    <button className="btn2">Watch vedio</button>
                 </div> 
                 <div><img className="h-72 ms-20" src={img1}></img></div>  
           </div>
           <div className="divs">
                    <div><img className="h-32 w-40" src={img2}></img><br></br>Lorem ipsum</div> 
                    <div><img className="h-32 w-40" src={img3}></img><br></br>Sed ut perspiciatis</div>
                    <div><img className="h-32 w-40" src={img4}></img><br></br>Magni Dolores</div>
                    <div><img className="h-32 w-40" src={img5}></img><br></br>Nemo enim</div>  
           </div>       
      </div>
    </div>
  );
};
export default Startup;
