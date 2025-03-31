import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./animations.css"; 

const AnimatedComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  
  const modalRef = useRef(null);
  const notificationRef = useRef(null);

  return (
    <div className="container">
      <button onClick={() => setShowModal(!showModal)}>Toggle Modal</button>
      <button onClick={() => setShowNotification(!showNotification)}>Toggle Notification</button>

    
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="fade"
        unmountOnExit
        nodeRef={modalRef}
      >
        <div ref={modalRef} className="modal">
          <p>This is a modal</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </CSSTransition>

     
      <CSSTransition
        in={showNotification}
        timeout={300}
        classNames="slide"
        unmountOnExit
        nodeRef={notificationRef}
      >
        <div ref={notificationRef} className="notification">
          This is a notification
        </div>
      </CSSTransition>
    </div>
  );
};

export default AnimatedComponent;
