import React from 'react';
import './App.css';
import Header from './Components/Hedaer/Header';
import Shop from './Components/Shop/Shop';
import Order from './Components/Oder/Order';
import { Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Manage from './Components/Manage/Manage';
import Product from './Components/Product/Product';


function App() {
  return (
    <div >
      <Header />
      <Routes >
        <Route exact path='/' element={<Shop />} >  </Route>
        <Route path='/Order' element={<Order />} >  </Route>
        <Route path='/Product/:ProductID' element={<Product />} >  </Route>
        <Route path='/Manage' element={<Manage />} >  </Route>
        <Route path='*' element={<Error />}  >  </Route>
      </Routes>

    </div>
  );
}

export default App;
