import React from 'react'
import Spinner from '../spinner/Spinner'
import './modal.css'

const Modal = () => {
  return (
    <div className='modal'>
      <div className="modal-spinner">
        <Spinner />
      </div>
    </div>
  )
}

export default Modal