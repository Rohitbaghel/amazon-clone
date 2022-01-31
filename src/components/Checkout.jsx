import React from 'react';
import {Navbar} from './Navbar';

export const Checkout = () => {
  return <>
    <Navbar/>
    <div className="flex ">
      <div className='w-3/4 m-3'>
        <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_TRAVEL_BACKPACK_ARYA/fcc5ada4-f6a9-4d3c-8b1b-fd6c522d13c0._UR3000,600_SX1500_FMwebp_.jpg" alt="" className='object-fill h-12 w-full' />
        <p className='text-xl font-extrabold'>Your Shopping Basket</p>
      </div>
      <div className='mt-3 p-2  border  w-1/4' style={{backgroundColor:'#EBEDEC'}}>
        <div className='flex'>
          <p>Subtotal (0 items) :</p> <strong>0</strong>
        </div>
        <input type="checkbox" name="" id="checkboxInput" />
        <label htmlFor="checkboxInput">  This Order contains a gift</label> <br />
       
<div className="flex justify-center">
          <button className='border-black border-2 pl-2 pr-2 rounded-lg bg-yellow-500 mt-2 ' >Proceed to checkout</button>
          </div>
     
      </div>
  </div>
 </>;
};
