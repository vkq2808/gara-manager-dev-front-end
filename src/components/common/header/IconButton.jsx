import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './IconButton.css';

const IconButton = ({ iconClassName, onClick }) => {
    return (
        <button onClick={onClick} className="icon-button">
            <i className={"fas " + iconClassName}></i> {/* Thẻ <i> cho icon */}
        </button>
    );
}

export default IconButton;