import React, {useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
export const Navbar=() => {
  const [cart,setCart] = useState([])
    const getCartLength= async() => {
        const res=await fetch('http://localhost:3002/cart')
        const data=await res.json()
        setCart(data)
    }
    useEffect(() => {
        getCartLength()
    },[])
    return <>
        <div className='flex place-content-evenly sticky bg-black'>
            <div>
                <Link to='/'>
              
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" className="w-20 mx-2 mt-4 object-contain" />
                    </Link>
            </div>
            <div className='flex my-2 align-center w-3/4'>
                <input type="text" className="w-full my-2" />
                <SearchIcon className="bg-red-600 my-2"
                style={{height:'34px',padding:'5px'}}/>
            </div>
            <div className='flex gap-4 text-white mt-2'>
                <div>
                <span className='text-sm'>Returns</span><br />
                    <span className=''>Sign In</span>
                </div>
                <div>
                    <span className='text-sm'>Returns</span><br />
                    <span>&Orders</span>
                </div>
                <div>
                    <span className='text-sm'>Amazon</span><br />
                    <span>Prime</span>
                </div>
                <div className='flex items-center'>
                    <Link to='/cart'>
                    <ShoppingBasket style={{height:'50px'}}/>
                    </Link>
                    <span className="ml-2 text-xl  items-center">{cart?.length}</span>
                </div>
            </div>
    </div>
    </>;
};
