import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCart} from '../Redux/AddToCart/Action';

export const HomeProducts=({id, title, price, image, rating}) => {
    const dispatch=useDispatch()
    const AddProduct=() => {
        fetch(' http://localhost:3002/cart', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, price, image, rating})
        }).then(d => d.json).then((data) => {dispatch(AddToCart(data));}).catch((err) => {
            console.log(err);
        })
      
    }
   
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
            <img src={image} alt="" className='w-full  object-contain mb-5 max-h-80'/>
        </div>
        <div className="flex justify-center mb-3">

       
            <button className="border-blue-600 border-2 p-2 bg-yellow-400 font-extrabold rounded-2xl mt-3 justify-center" onClick={
                () => {
    AddProduct()
}
            }>Add To cart</button>
            </div>
  </div>;
};
