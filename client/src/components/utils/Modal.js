import React from 'react';
import ReactDOM from "react-dom";
import "./modal.scss";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-container-tasks">
                <div className="modal-container-tasks__title">
                    {props.title}
                </div>
                <div className="modal-container-tasks__description">
                    {props.description}
                </div>
            </div>

        </div>,
        document.querySelector("#modal")
    )
}

export default Modal
