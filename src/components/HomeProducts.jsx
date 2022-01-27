import React from 'react';

export const HomeProducts = ({id,title,price,image,rating}) => {
   
    return < div className="border-black z-1 bg-white">
         <div className='m-2'>
            <p >{title}</p>
            <p>
            <small>&#8377;</small>
                <strong>{price}</strong>
             </p>
        </div>
        <div className='flex ml-2'>
            {Array(rating).fill().map((_, i) => (
                <p key={i}>⭐</p>
                
            ))}
        </div>
        <div>
            <img src={image} alt="" className='w-full  object-contain mb-5 max-h-48'/>
        </div>
        <div className="flex justify-center mb-3">

       
            <button className="border-blue-600 border-2 p-2 bg-yellow-400 font-extrabold rounded-2xl mt-3 justify-center">Add To cart</button>
            </div>
  </div>;
};
