
import './App.css';
import {Checkout} from './components/Checkout';
import Home from './components/Home';
import {Navbar} from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Checkout/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
