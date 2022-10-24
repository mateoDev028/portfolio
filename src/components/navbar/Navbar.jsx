import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
        <div className='navbar'>
          <div className="navbar-left">  
            <div className="navbar-left-cont">
              <a
              className="navbar-icon fa-solid fa-envelope"
              href="mailto:mateodev028@gmail.com"
              target='_blank'
              ></a>
              <a 
              className=" navbar-icon fa-brands fa-linkedin"
              target='_blank'
              href="https://www.linkedin.com/in/mateo-miglino/"
              ></a>  
            </div>
          </div>
          <div className="navbar-center">
            <div className="navbar-center-cont">
              <li className="navbar-list-item">
                <NavLink className="navbar-link" to='/'>PORTFOLIO</NavLink>
              </li>
              <li className="navbar-list-item">
                <NavLink className="navbar-link" to='/aboutme_'>ABOUT ME</NavLink>
              </li>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-right-cont">
              <h3 className="navbar-text">MATEO MIGLINO</h3>  
            </div>
          </div>
        </div>
  )
}

export default Navbar