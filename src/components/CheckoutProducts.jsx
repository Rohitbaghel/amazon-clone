import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const CheckoutProducts=() => {
    const [cart,setCart] = useState([])
    const getCartLength= async() => {
        const res=await fetch('http://localhost:3002/cart')
        const data=await res.json()
        setCart(data)
    }
    useEffect(() => {
        getCartLength()
    }, [])
    const RemoveproductFromcart= () => {
       
    }
    return <>
        <div className='w-3/4 -mt-5'>
            {cart.map((e) => (
                <div className='flex   mb-5' key={e.id}>
                    <div >
                    <img src={e.image} alt="" className='object-contain w-40 h-40' />
                    </div>
                    <div className='pl-5 '>
                        <p className=''>
                        {e.title}
                        </p>
                        <p className='text-lg '> <small className='text-lg font-bold'>&#8377;</small> {e.price}</p>
                        <div className='flex '>
                        {Array(e.rating).fill().map((_, i) => (
                    <p key={i}>⭐</p>
                     ))}
                        </div>
                        <button className='border-blue-600 border-2 p-1 bg-yellow-400 font-extrabold rounded-2xl mt-2 justify-center
                        'onClick={RemoveproductFromcart}>Remove from Cart</button>
                    </div>
                
               
                </div>
               
                
                
            ))}
        </div>
    </>;
};
