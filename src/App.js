import React from 'react';
import './App.css';
import Header from './Components/Hedaer/Header';
import Shop from './Components/Shop/Shop';
import DeviceData from './DeviceData/iPhone';
import Order from './Components/Oder/Order';
import { Routes, Route } from 'react-router-dom';
import Error from './Components/Error';


function App() {
  return (
    <div >
      <Header />
      <Routes >
        <Route exact path='/' element={<Shop />} >  </Route>
        <Route path='/Order' element={<Order />} >  </Route>
        <Route path='*' element={<Error />}  >  </Route>
      </Routes>

    </div>
  );
}

export default App;
