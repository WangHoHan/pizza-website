import React from 'react';
import {Link} from "react-router-dom";
import foodNotFound from '../../assets/food-not-found/food-not-found.jpeg';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <main>
          <section className='section-page-not-found'>
              <article className='article-page-not-found'>
                  <picture>
                      <source srcSet={foodNotFound} />
                      <img className='food-not-found' src={foodNotFound} alt='Food not found' />
                  </picture>
              </article>
              <Link className='link-page-not-found' role='button' to='/home'>
                  back to home page
              </Link>
          </section>
        </main>
    );
};

export default PageNotFound;
