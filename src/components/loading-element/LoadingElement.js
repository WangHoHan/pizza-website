import React from 'react';
import {motion} from 'framer-motion';
import {translate} from '../../dictionaries/translate';
import verona from '../../assets/pizzas/verona.webp';
import './LoadingElement.css';

const LoadingElement = () => {
    return (
        <main>
            <section className='section-loading-element'>
                <article className='article-loading-element'>
                    <picture>
                        <source srcSet={verona} />
                        <motion.div
                            style={{
                                x: -130
                            }}
                            animate={{
                                x: 0,
                                rotate: 80
                            }}
                            transition={{
                                duration: 1
                            }}>
                            <img className='img-loading-element' src={verona} alt={translate[verona]} />
                        </motion.div>
                    </picture>
                    <h1 className='h1-loading-element'>loading...</h1>
                </article>
            </section>
        </main>
    );
};

export default LoadingElement;
