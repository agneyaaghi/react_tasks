import React from 'react'
import img1 from './img2.jpg'
import img2 from './img3.jpg'
import img3 from './img4.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addingdata } from './counterslice'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const products=[
          {id:1,nameofprod:"prod1",price:300,image:img1},
          {id:2,nameofprod:"prod2",price:400,image:img2},
          {id:3,nameofprod:"prod3",price:450,image:img3}         
  ];

  const data=useSelector((state)=>state.counter.data)
  const dispatch=useDispatch();
  console.log(products);    

  return (
    <div className='flex gap-3 ml-2 mr-3 mt-5'>
         {products.map((item)=>(
            <div key={item.id}>
                    <img src={item.image} className='h-80 w-80'></img>
                    <label>{item.nameofprod}</label>
                    <p>{item.price}</p>
                    <button onClick={()=>dispatch(addingdata({products}))}  className='bg-red-300'>click here</button>
            </div>
         ))}
         <div>
              <button className='bg-slate-800 text-gray-50 p-3'>cart</button>
         </div>
<Link to='/view'><div>
<FaCartArrowDown size={36} />
</div></Link>
</div>
);
};

export default Cart