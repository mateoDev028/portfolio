import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <div className="spinner">
        <div className="spinner-animation">
        </div>
        <h5 className='spinner-text'>Cargando...</h5>
    </div>
  )
}

export default Spinner