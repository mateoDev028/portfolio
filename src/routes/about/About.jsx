import React, { useState, useEffect } from 'react';
import './about.css'
import Me from './aboutImg/me1.png'
import certJS from './aboutImg/Cert_JS.jpg'
import certReact from './aboutImg/Cert_React.jpg'
import Modal from '../../components/modal/Modal';


const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [])

  return (
    <div className="about">
      { loading ? (

        <Modal />

        ) : (
          <div className="about-container">
            <div className='about-left-top'>
              <img className='about-img-left-top' src= {Me} alt="" />
            </div>
            <div className="about-right-top">
              <p className='about-text-right-top'>
                Soy Mateo Miglino estudiante de la carrera de Lic. Informatica 
                en la Universidad Nacional del Oeste, mis bases de Programacion Imperativa 
                las aprendí programando en C y mis bases de Programacion con Objetos las aprendí
                programando en Java.
                Actualmente estoy realizando un curso donde aprendo a crear microservicios con 
                Spring Boot, Dockerizar esos microservicios con sus bases de datos y luego desplegarlos
                en una maquina remota con AWS, también la orquestación de contenedores con Kubernetes.
              </p>
            </div>  
            <div className="about-down">
              <img className='about-img-down' src={certJS}alt="" />
              <img className='about-img-down' src={certReact}alt="" />
            </div>
          </div>
        )
      }
    </div>  
  )
}
export default About
