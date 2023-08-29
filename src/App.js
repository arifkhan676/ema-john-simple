import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Hedaer/Header';
import Shop from './Components/Shop/Shop';
import Order from './Components/Oder/Order';
import { Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Product from './Components/Product/Product';
import Review from './Components/Cart/Review';

export const Context = createContext();


function App() {
  const [cartCount, setCount] = useState('');

  return (
    <div >
      <Context.Provider value={[cartCount, setCount]}>
        <Header />
        <Routes >
          <Route exact path='/' element={<Shop />} >  </Route>
          <Route path='/Order' element={<Order />} >  </Route>
          <Route path='/Product/:ProductID' element={<Product />} >  </Route>
          <Route path='/Review' element={<Review />} >  </Route>
          <Route path='*' element={<Error />}  >  </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
