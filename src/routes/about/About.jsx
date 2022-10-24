import React from 'react'
import './about.css'
import Me from './aboutImg/me.jpg'
import certJS from './aboutImg/Cert_JS.jpg'
import certReact from './aboutImg/Cert_React.jpg'


const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className='about-left-top'>
          <img className='about-img-left-top' src= {Me} alt="" />
        </div>
        <div className="about-right-top">
          <p className='about-text-right-top'>
            Soy Mateo Miglino actual estudiante de la carrera de Lic. Informatica 
            en la Universidad Nacional del Oeste, mis bases de Programacion Imperativa 
            las aprendí programando en C y mis bases de Programacion con Objetos las aprendí
            programando en Java.
            Mi favoritismo por el Desarrollo Web comenzo a través de un curso de JavaScript
            el cual me llevó a que actualmente me encuentre desarrollando con React.js 
            una tecnología que me encanta y me apasiona.
          </p>
        </div>  
        <div className="about-down">
          <img className='about-img-down' src={certJS}alt="" />
          <img className='about-img-down' src={certReact}alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default About
