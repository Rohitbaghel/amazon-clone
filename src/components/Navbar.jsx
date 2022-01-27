import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
export const Navbar = () => {
    return <>
        <div className='flex place-content-evenly sticky bg-black'>
            <div>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" className="w-20 mx-2 mt-4 object-contain"/>
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
                    <ShoppingBasket style={{height:'50px'}}/>
                  <span className="ml-2 text-xl  items-center">0</span>
                </div>
            </div>
    </div>
    </>;
};
