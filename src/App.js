import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from 'Components/Home/Home'
import Services from './Components/Services/services'

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/services" element={<Services />} />
  </Routes>
  );
}

export default App;
