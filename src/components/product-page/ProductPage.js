import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './ProductPage.css'

const ProductPage = () => {
    const {id} = useParams();
    const pizza = useSelector((state) => state.food.find(pizza => pizza.id === id));
    const ingredients = useSelector((state) => state.ingredients);

    return (
        <main className='main-product-page'>
            <section>
                <article>
                    <picture>
                        <source srcSet={pizzaPictureDictionary[translate[pizza.name]]} />
                        <img  className='img-product-page' src={pizzaPictureDictionary[translate[pizza.name]]} alt={translate[pizza.name]} />
                    </picture>
                    <div className='description'>
                        <h1 className='h1-product-page'>{translate[pizza.name].toLowerCase()}</h1>
                        <ul className='toppings'>
                            {ingredients.length && ingredients.filter(ingredient => pizza.ingredients.includes(ingredient.id))
                                .map(filteredIngredient => {
                                    return <li className='topping' key={filteredIngredient.id}>{translate[filteredIngredient.name].toLowerCase()}</li>
                                })}
                        </ul>
                    </div>
                </article>
            </section>
            <section>
                <article className='product-personalization'>
                    <h2 className='h2-product-page'>personalize your pizza</h2>
                    <ul className='ingredients'>
                        {ingredients.length && ingredients.map(ingredient => {
                                return (
                                    <li className='ingredient' key={ingredient.id}>
                                        <button className='add-additional-ingredient'>add</button>
                                        <button className='remove-additional-ingredient'>remove</button>
                                        <span className='additional-ingredient-amount'>0</span>
                                        <span className='additional-ingredient-info'>
                                            {translate[ingredient.name].toLowerCase()}, ₿{ingredient.price}
                                        </span>
                                    </li>);
                            })}
                    </ul>
                </article>
            </section>
            <section>
                <article>
                </article>
            </section>
        </main>
    );
};

export default ProductPage;
