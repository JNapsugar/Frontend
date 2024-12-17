import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { Login } from './Login';
import { HotelList } from './HotelList';
import { HotelSingle } from './HotelSingle';
import { HotelCreate } from './HotelCreate';
import { HotelMod } from './HotelMod';
import { HotelDel } from './HotelDel';

export const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" exact element={< Login/>} />
          <Route path='/list-hotel' element={<HotelList />} />
          <Route path='/hotels/:hotelId' element={<HotelSingle />} />
          <Route path='/create-hotel' element={<HotelCreate />} />
          <Route path='/del-hotel/:hotelId' element={<HotelDel />} />
          <Route path='/mod-hotel/:hotelId' element={<HotelMod />} />
        </Routes>
    </Router>
  );
}
