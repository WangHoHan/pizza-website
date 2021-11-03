import React from 'react';
import './MenuItem.css';

const MenuItem = ({name, price, picture}) => {
    return (
        <article className='article-menu-item'>
            <picture className='shopping-cart'>
                <source srcSet={picture} />
                <img className='img-menu-item' src={picture} alt={name} />
            </picture>
            <h1 className='h1-menu-item'>{name.toLowerCase()}</h1>
            <h4 className='h4-menu-item'>${price}</h4>
        </article>
    );
};

export default MenuItem;
