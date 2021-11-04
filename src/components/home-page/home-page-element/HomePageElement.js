import React from 'react';
import './HomePageElement.css';

const HomePageElement = ({name, price, picture}) => {
    return (
        <article className='article-home-page-element'>
            <picture className='shopping-cart'>
                <source srcSet={picture} />
                <img className='img-home-page-element' src={picture} alt={name} />
            </picture>
            <h1 className='h1-home-page-element'>{name.toLowerCase()}</h1>
            <h4 className='h4-home-page-element'>${price}</h4>
        </article>
    );
};

export default HomePageElement;
