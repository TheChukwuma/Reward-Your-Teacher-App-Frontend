import React from 'react'
import "./Modal.style.js"
import { ModalContainer } from './Modal.style.js'

const Modal = ({ children, closeModal, title }) => {
  return (
    <ModalContainer>
    <div className='Modal-Area'>
        <div className='Modal-content'>
            <div className='Modal-header'>
             <h1>{title}</h1>
             <button className="close-button" onClick={(e)=>closeModal(e)}>&times;</button>
            </div>
          <div className='Modal-body'>
            {children}
          </div>
        </div>
      
    </div>
    </ModalContainer>
  )
}

export default Modal