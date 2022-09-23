import Loadguns from './components/Loadguns/Loadguns'
import './App.css';
import { useState } from 'react';

function App() {
  const [productCount, setProductCount] = useState(0);
  const collectCart = ()=>{
    setProductCount(productCount + 1)
  }
  console.log(productCount);
  return (
    <div className="App">
      <h1 className='text-5xl font-bold text-white'>Fake Gun Store</h1>
      <h2 className='text-3xl text-white'>Cart Quantity : <span className='font-bold'>{productCount}</span></h2>
      <Loadguns data = {collectCart}></Loadguns>
    </div>
  );
}

export default App;
