
import './App.css';
import {Checkout} from './components/Checkout';
import Home from './components/Home';
import {Navbar} from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import {Login} from './components/Login';
import {useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {Auth} from './components/firebash';
import {useDispatch, useSelector} from 'react-redux';
import {LoginUser} from './Redux/Auth/Action';
import {Payment} from './components/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import { Thanx} from './components/Thanx';
const promise = loadStripe('pk_test_51KpFnSSJovszuz4bqQeEdVjgJ2QWQvJdPO7583WgkuLo1mF5tbFKrSHJmMPYddfFAumj5ZLygbcIBbwtetspm48d00w5iPNBxx');
function App() {
  const dispatch=useDispatch()

  useEffect(() => {
    Auth.onAuthStateChanged(AuthUser => {
      // console.log( + AuthUser)
      if (AuthUser) {
        dispatch(LoginUser(AuthUser))
      } else {
        dispatch(LoginUser(null))
      }
 })
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Checkout />}></Route>
        <Route path='/thankyou' element={<Thanx/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/payment' element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        }></Route>
      </Routes>
    
    </div>
  );
}

export default App;
