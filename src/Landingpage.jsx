import React from "react";
import './Landingpage.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
const Landingpage = () => {
  return (
    <div>
      <div className="maindiv">
        <div className="a">
        <div className="image"></div>
        <div className="b">
        <div className='flex'>
            <div><h3 className='text-red-600 ms-40 mt-10 ps-5 font-bold'>START SIMPLE</h3></div>
            <div>
              <button></button>
              <button></button>
              <button></button>
            </div>
        </div>
        <div className='text-gray-950 ms-40'>
          <h1 className="pt-24">STARTING LANDING PAGE FOR YOUR PRODUCT<br></br> & SERVICES</h1>
          <p className="pt-8">
            erfect landing page to showcase your product or services.built with
            bootstrap
          </p>
          <p className="pt-4">TRY FOR FREE- just leave your e-mail below and we will get in touch</p>
          <div className="pt-6">
            <button className="text-black bg-white ps-5 pr-5 pt-2 pb-2">your email address</button>
            <button className="bg-red-600 ps-5 pr-5 pt-2 pb-2 ms-8 ">request free trial</button>
          </div>
        </div>
        </div>
        </div>
      </div>
      <div className="ms-16 mt-10 mb-10 justify-center">
      <div className="mb-10">
        <h3>OUR SUCCESS STORIES</h3>
      </div>
      <div className="flex gap-10">
      <div><img className="h-80 w-96" src={img1}></img></div>
      <div><img className="h-80 w-96" src={img2}></img></div>
      <div><img className="h-80 w-96" src={img3}></img></div>
      </div>
    </div>
    </div>
  );
};
export default Landingpage;
