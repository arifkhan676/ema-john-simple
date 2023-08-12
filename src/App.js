import React from 'react';
import './App.css';
import Header from './Components/Hedaer/Header';
import Shop from './Components/Shop/Shop';
import DeviceData from './DeviceData/iPhone';
import Order from './Components/Oder/Order';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Header />
      <Routes >
        <Route path='/' element={<Shop />} >  </Route>
        <Route path='/Home' element={<Shop />} >  </Route>
        <Route path='/Order' element={<Order />} >  </Route>
      </Routes>

    </div>
  );
}

export default App;
