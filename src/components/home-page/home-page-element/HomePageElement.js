import React from 'react';
import './HomePageElement.css';

const HomePageElement = ({name, price, picture}) => {
    return (
        <article className='article-home-page-element'>
            <div className='flip-card'>
                <div className='flip-card-front'>
                    <picture className='shopping-cart'>
                        <source srcSet={picture} />
                        <img className='img-flip-card-front' src={picture} alt={name} />
                    </picture>
                    <h1 className='h1-flip-card-front'>{name.toLowerCase()}</h1>
                    <h4 className='h4-flip-card-front'>${price}</h4>
                </div>
                <div className='flip-card-back'>
                    <h1 className='h1-flip-card-back'>ingredients</h1>
                </div>
            </div>
        </article>
    );
};

export default HomePageElement;
