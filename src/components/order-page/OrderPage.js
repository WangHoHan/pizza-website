import React from 'react';
import {useSelector} from 'react-redux';
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './OrderPage.css'

const OrderPage = () => {
    const bag = useSelector((state) => state.bag);
    const food = useSelector((state) => state.food);
    const ingredients = useSelector((state) => state.ingredients);
    const sauces = useSelector((state) => state.sauces);

    return (
        <main className='main-order-page'>
            <h1 className='h1-order-page'>your bag</h1>
            <section className='bag'>
                {bag.pizza.map((product, idx) => {
                    return (
                        <article className='product' key={idx}>
                            <div className='product-info'>
                                <h2>{translate[food.find(pizza => pizza.id === product.id).name].toLowerCase()}</h2>
                                <picture>
                                    <source srcSet={pizzaPictureDictionary[translate[food.find(pizza => pizza.id === product.id).name]]} />
                                    <img className='img-order-page' src={pizzaPictureDictionary[translate[food.find(pizza => pizza.id === product.id).name]]} alt={translate[food.find(pizza => pizza.id === product.id).name]} />
                                </picture>
                                <ul className='ul-order-page'>
                                    {ingredients.length && ingredients.filter(ingredient => food.find(pizza => pizza.id === product.id).ingredients.includes(ingredient.id))
                                        .map(filteredIngredient => {
                                            return <li className='li-order-page' key={filteredIngredient.id}>{translate[filteredIngredient.name].toLowerCase()}</li>
                                        })}
                                </ul>
                            </div>
                            <div className='product-modification'>
                                <h2 className='h2-product-modification'>personalize your pizza</h2>
                                <ul className='pieces'>
                                    {ingredients.length && ingredients.map(ingredient => {
                                        return (
                                            <li className='piece' key={ingredient.id}>
                                                <button className='add-additional-piece' /*onClick={() => addAdditionalIngredient(ingredient.id)}*/>
                                                    add
                                                </button>
                                                <button className='remove-additional-piece' /*onClick={() => removeAdditionalIngredient(ingredient.id)}*/>
                                                    remove
                                                </button>
                                                <span className='additional-piece-amount'>
                                                    0
                                                    {/*{additionalIngredients.filter(additionalIngredient => additionalIngredient === ingredient.id).length}*/}
                                                </span>
                                                <span className='additional-piece-info'>
                                                    {translate[ingredient.name].toLowerCase()}, ₿{ingredient.price}
                                                </span>
                                            </li>);
                                    })}
                                </ul>
                                <button className='remove-from-bag'>remove from bag</button>
                            </div>
                        </article>
                    );
                })}
            </section>
        </main>
    );
};

export default OrderPage;
