import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlightList from './pages/FlightList';
import FlightBooking from './pages/FlightBooking';
import { FlightContext } from './components/FlightContext';

import './App.css';

export default function App() {
  return (
    <FlightContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FlightList />} />
          <Route path='/booking/:flightId' element={<FlightBooking />} /> 
        </Routes>
      </BrowserRouter>
    </FlightContext>
  );
}
