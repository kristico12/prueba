// Dependencies
import React from 'react';

function Modal(props) {
  return (
    <div className="modal-section">  
        <div className="modal-content">
          { props.children }
        </div>
        <style jsx>{`
          .modal-section {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.6);
          }
          .modal-content {
              background-color: white;
          }
        `}</style>
    </div>
  );
}
export default Modal;
