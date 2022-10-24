import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './routes/home/Home';
import About from './routes/about/About'
import { Routes, Route } from 'react-router-dom';
import './app.css'


function App() {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
  
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme_' element={<About />} />
        
      </Routes>
    </div>
  );
}

export default App;
