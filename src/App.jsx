import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './routes/home/Home';
import About from './routes/about/About'
import { Routes, Route } from 'react-router-dom';
import './app.css'
import Modal from './components/modal/Modal';
import Spinner from './components/spinner/Spinner';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 700)
  }, [])
  
  return (
    <div className='app'>
    {
      loading ? (

          <Modal />
        
      ) : (
        <div>
          <Navbar />
          <Routes>
        
              <Route path='/' element={<Home/>}/>
              <Route path='/aboutme_' element={<About />} />
              
          </Routes>
        </div>
      )
    }
    </div>
  );
}

export default App;
