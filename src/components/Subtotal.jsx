import React, {useState,useEffect} from 'react';
import CurrencyFormat from 'react-currency-format';
export const Subtotal=() => {
    const [cart, setCart]=useState([])
    const [total, setTotal]=useState(0)
    const getCartLength= async() => {
        const res=await fetch('http://localhost:3002/cart')
        const data=await res.json()
        setCart(data)
    }
 
    const getTotalPrice=() => {
        // console.log(cart);
        let sum = 0
        for (let i=0;i < cart.length;i++) {
          sum += cart[i].price
        }
       setTotal(sum)
    }
    useEffect(() => {
        getCartLength()
      
    }, [])
    useEffect(() => {
      getTotalPrice()
    }, )
    return <>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p className='mb-'>
                        Subtotal ({cart.length} items): <strong>₹{total}</strong>
                    </p>
                    <small className="mb-4 text-lg font-bold">
                        <input type="checkbox"/> This order Contains a gift
                    </small>
                
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
        />
      <button className='border-2 border-black m-auto block p-1 mt-4 bg-yellow-600 font-bold'>Proceed to Checkout</button>
        
    </>;
};
