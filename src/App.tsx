import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Gallery, Home, Picture } from './pages';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/picture' element={<Picture />} />
    </Routes>
  );
}

export default App;
