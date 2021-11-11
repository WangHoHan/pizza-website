import React from 'react';
import './FlipCard.css';
import FlipCardFront from './flip-card-front/FlipCardFront';
import FlipCardBack from './flip-card-back/FlipCardBack';

const FlipCard = ({id, toppings, name, price, picture}) => {
    return (
        <article className='article-flip-card'>
            <div className='flip-card'>
                <FlipCardFront name={name} price={price} picture={picture} />
                <FlipCardBack id={id} toppings={toppings} />
            </div>
        </article>
    );
};

export default FlipCard;
