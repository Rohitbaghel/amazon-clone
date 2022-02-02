import React from 'react';
import {CheckoutProducts} from './CheckoutProducts';
import {Navbar} from './Navbar';
import {Subtotal} from './Subtotal';

export const Checkout = () => {
  return <>
    <Navbar/>
    <div className="flex ">
      <div className='w-3/4 m-3'>
        <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_TRAVEL_BACKPACK_ARYA/fcc5ada4-f6a9-4d3c-8b1b-fd6c522d13c0._UR3000,600_SX1500_FMwebp_.jpg" alt="" className='object-fill h-12 w-full' />
        <p className='text-xl font-extrabold'>Your Shopping Basket</p>
      </div>
      <div className='mt-3 p-2  border  w-1/4' style={{backgroundColor:'#EBEDEC'}}>
  <Subtotal/>
     
      </div>
    </div>
    <CheckoutProducts/>
 </>;
};


