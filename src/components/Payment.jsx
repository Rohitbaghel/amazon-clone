import {useElements, useStripe,CardElement} from '@stripe/react-stripe-js';
import axios from './axios';
import React, {useEffect, useState} from 'react'
import CurrencyFormat from 'react-currency-format';
import {useNavigate} from 'react-router-dom';
import {CheckoutProducts} from './CheckoutProducts';
import {Navbar} from './Navbar';

export const Payment=() => {
    const [cart, setCart]=useState([])
    const [error, setError]=useState(null)
    const [disabled, setDisabled]=useState(true)
    const [succeeded, setSucceeded]= useState(false); 
    const [processing, setProcessing]=useState("");
    const [clientSecret, setClientSecret] = useState(true)
    const [total, setTotal]=useState(0)
    const stripe=useStripe();
    const element=useElements()
    const navigate = useNavigate()
    const handleSubmit= async(e) => {
        e.preventDefault();
        setProcessing(true);
        const payload=await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:element.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false);
            navigate('/orders')
        })
    }

    const handleChange=event => {
        // and display any errors as the customer types their card details
        setDisabled (event.empty);
        setError(event.error? event.error.message:'');
    }
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
    })
    useEffect(() => {
        // generate the special stripe secret which
         // allows us to charge a customer
             const getClientSecret=async () => {
                 const response=await axios({
                     method: 'POST',
                     url: `/payment/create?total=${total*100}`
                 });
                 setClientSecret(response.data.clientSecret)
           };  
        getClientSecret()
    }, [total])
    console.log('The secret is >>>>>',clientSecret)
  return (
      <>
          <Navbar/>
          <div className="bg-red-200 text-center font-bold text-lg">
          <p className="">Checkout ({cart?.length} Items)</p>
          </div>
          {/* delivery section */}
          <div className="flex p-5 my-2 border-2 border-gray-200">
              <div className="basis-1/5 ">
                  <p className="text-lg font-semibold">Delivery Address</p>
              </div>
              <div className="basis4/5 ">
                  <p className="">Baghel.rohit99@gmail.com</p>
                  <p className="">Rzs-279 Nihal Vihar</p>
                  <p className="">Nangloi,Delhi-41</p>
              </div>

          </div>
          {/* delivery section */}
          
          {/* Review items and Delivery */}
          <div className="flex p-5 my-2 border-2 border-gray-200">
              <div className="basis-1/5 ">
                  <p className="text-lg font-semibold">Review items and Delivery</p>
              </div>
              <div className="basis4/5 ml-5">
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
                        <button className='border-blue-600 border-2 p-1 bg-yellow-400 font-extrabold rounded-2xl mt-2 justify-center"'>Remove from Cart</button>
                    </div>
                
              
                </div>
               
                
                
            ))}
              </div>

          </div>

          {/* Review items and Delivery */}
          {/* payment method */}
          <div className="flex p-5 my-2 border-2 border-gray-200">
              <div className="basis-1/5 ">
                  <p className="text-lg font-semibold">Payment Method</p>
              </div>
              <div className="basis4/5 w-full">
                {/* payment using stripe */}
                  <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange} />
                      {/* order total */}
                      <div className="">
                      <CurrencyFormat
            renderText={(value) => (
            <p className='text-lg font-bold mt-1'>Order Total:₹{total}</p>
            )}
            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
                          />
                          <button disabled={processing||disabled||
                              succeeded}>
                      <span>{processing ? <p>Processing </p>:
                      "Buy Now"}</span>  
                      </button>
                      </div>
                      {/* order total */}
                   {/* errors  */}
                   {error && <div>{error}</div>}
                </form>


              </div>

          </div>
            {/* payment method */}
      </>
  )
}
