import React from "react";
import "./style.css";

function CartoonCard(props) {
    return (
        <span className="card">
            <div className="img-container">
                <span onClick={props.handleIncrement} aria-label="click item" className="click-item"><img alt={props.id} src={props.image} /></span>
            </div>
        </span>
    );
}

export default CartoonCard;