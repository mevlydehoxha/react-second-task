import React from 'react';
import './Card.css';

const Cards =(props)=>{

    const {tab_title, price, description}= props;
    return (
        <div className="cards-container">
            <div className="container">
                <h1 className="tab_title">{tab_title}</h1>
                <h2 className="price">${price}/yr</h2>
                <p className="description">Instead of ${description}/yr</p>
                <button className="buy-button">Buy Now</button>
            </div>
        </div>
    );

};
export default Cards;