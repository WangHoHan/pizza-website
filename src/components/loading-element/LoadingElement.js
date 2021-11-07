import React from 'react';
import {translate} from '../../dictionaries/translate';
import verona from '../../assets/pizzas/verona.webp';
import './LoadingElement.css';

const LoadingElement = () => {
    return (
        <section className='section-loading-element'>
            <article className='article-loading-element'>
                <picture>
                    <source srcSet={verona} />
                    <img className='img-loading-element' src={verona} alt={translate[verona]} />
                </picture>
                <h1 className='h1-loading-element'>loading...</h1>
            </article>
        </section>
    );
};

export default LoadingElement;
