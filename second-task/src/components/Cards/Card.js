import React from 'react';
import './Card.css';

const Cards =(props)=>{
    
    const {domain, price, description}= props;
    return (
        <div className="cards-container">
            <div className="container">
                <h1 className="domain">.{domain}</h1>
                <h2 className="price">${price}/yr</h2>
                <p className="description">Instead of ${description}/yr</p>
                <button className="buy-button">Buy Now</button>
            </div>
        </div>
    );

};
export default Cards;