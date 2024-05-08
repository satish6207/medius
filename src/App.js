import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Weather from './components/weather';

function App() {
  return (
    <BrowserRouter>
      <ul style={{display:"flex", justifyContent:'space-around'}}>
        <li><Link to='weather'>Home</Link></li>
        <li><Link to='services'>Services</Link> </li>
        <li> <Link to='about'>About</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </ul>
      <Routes>
        <Route exact path="/weather" element={ <Weather /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/services" element={ <Services />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
