import React from 'react';
import './MenuItem.css';

const MenuItem = ({name, price, picture}) => {
    return (
        <article>
            <picture className='shopping-cart'>
                <source srcSet={picture} />
                <img src={picture} alt={name} />
            </picture>
            <h1>{name.toLowerCase()}</h1>
            <h4>${price}</h4>
        </article>
    );
};

export default MenuItem;
