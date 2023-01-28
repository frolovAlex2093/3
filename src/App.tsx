import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Gallery, Home, Picture } from './pages';


function App() {
  const[id, setID] = useState(0);

  const onclickPic = (id: number) => {
    setID(id);
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery onclickPic={onclickPic}/>} />
      <Route path='/picture' element={<Picture id={id}/>} />
    </Routes>
  );
}

export default App;
