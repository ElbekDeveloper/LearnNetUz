// src/components/Modal.js
import React from "react";
import "./Modal.css"; // Добавьте файл стилей для модального окна

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Если модальное окно закрыто, ничего не рендерим

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
