import React from 'react';
import './FlipCardFront.css';

const FlipCardFront = ({name, price, picture}) => {
    return (
        <div className='flip-card-front'>
            <picture>
                <source srcSet={picture} />
                <img className='img-flip-card-front' src={picture} alt={name} />
            </picture>
            <h1 className='h1-flip-card-front'>{name.toLowerCase()}</h1>
            <h4 className='h4-flip-card-front'>${price}</h4>
        </div>
    );
};

export default FlipCardFront;
