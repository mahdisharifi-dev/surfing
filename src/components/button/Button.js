import React from 'react'
import "./button.scss";
const Button = ({ title, onClick = null }) => {
    return (
        <button className="app-button" onClick={onClick}>{title}</button>
    )
}

export default Button;
