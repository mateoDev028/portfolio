import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className="header-texts">
          <h1 className='header-text'>Bienvenidos </h1>
          <h1 className='header-text'>a mi Portfolio  </h1>
          <h2 className='header-text header-subtitle'>Espero que encuentren lo que buscan</h2>
          <div className="header-down-container">
            <a href="#projects" className="header-down">
              <p className='header-down-text'>PROYECTOS</p>
              <div className='header-down-arrow'></div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

