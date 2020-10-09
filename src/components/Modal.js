import React from 'react';

const Modal = ({ title, visible, close, children}) => {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        zIndex: 2,
        alignItems: 'center',
        transform: visible ? 'translateY(0vh)' : 'translateY(-100vh)',
        backgroundColor: '#00000070',
        opacity: visible ? '1' : '0'
      }}>
      <div style={{
        height: '80%',
        width: '100%',
        backgroundColor: 'white',
        margin: 30,
        textAlign: 'left',
        padding: 30
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span><b>{title}</b></span>
          <span style={{ fontSize: 16 }} className="close-modal-btn" onClick={close}>X</span>
        </div>
        <div style={{ paddingTop: 20 }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;
