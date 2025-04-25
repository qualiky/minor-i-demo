import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom"; // Required for portals
import styles from "./Modal.module.css"; // Import CSS Module

// Get the element to portal the modal into (usually body or a dedicated modal root)
// It's good practice to have a <div id="modal-root"></div> in your index.html
const modalRoot = document.getElementById("modal-root");
if (!modalRoot) {
  // If modal-root doesn't exist, create it (useful for simple setups)
  const div = document.createElement("div");
  div.id = "modal-root";
  document.body.appendChild(div);
}

const Modal = ({ children, onClose }) => {
  // Create a div element for the modal content
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    // Append the modal div to the modal root when the component mounts
    modalRoot.appendChild(elRef.current);

    // Clean up by removing the modal div when the component unmounts
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []); // Empty dependency array ensures this runs only on mount/unmount

  // Add keyboard escape listener to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]); // Re-run if onClose changes

  // Render the modal using a portal
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      {" "}
      {/* Close modal when clicking overlay */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Prevent clicks inside modal from closing */}
        {children}
      </div>
    </div>,
    elRef.current, // The DOM node to portal to
  );
};

export default Modal;
