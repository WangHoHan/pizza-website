import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from '../../store';
import {bindActionCreators} from 'redux';
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './OrderPage.css';

const OrderPage = () => {
    const dispatch = useDispatch();
    const {removeProductFromBag, addIngredientToProduct, removeIngredientFromProduct, addSauceToBag, removeSauceFromBag} = bindActionCreators(actionCreators, dispatch);
    const bag = useSelector((state) => state.bag);
    const food = useSelector((state) => state.food);
    const ingredients = useSelector((state) => state.ingredients);
    const sauces = useSelector((state) => state.sauces);

    const addAdditionalPiece = (idx, ingredient, money) => {
        addIngredientToProduct(idx, ingredient, money)
    };

    const removeAdditionalPiece = (idx, ingredient, money) => {
        removeIngredientFromProduct(idx, ingredient, money);
    };

    const removeFromBag = (idx) => {
        let money = food.find(pizza => pizza.id === bag.pizza[idx].id).price;
        bag.pizza[idx].ingredients.forEach(topping => {
            const prix = ingredients.find(ingredient => ingredient.id === topping).price;
            money += prix;
        });
        removeProductFromBag({idx :idx, money: money});
    };

    const addSauce = (sauce, money) => {
        addSauceToBag(sauce, money);
    };

    const removeSauce = (sauce, money) => {
        removeSauceFromBag(sauce, money);
    };

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
                                <ul className='basic-ingredients'>
                                    {ingredients.filter(ingredient => food.find(pizza => pizza.id === product.id).ingredients.includes(ingredient.id))
                                        .map(filteredIngredient => {
                                            return <li className='basic-ingredient' key={filteredIngredient.id}>{translate[filteredIngredient.name].toLowerCase()}</li>
                                        })}
                                </ul>
                            </div>
                            <div className='product-modification'>
                                <h2 className='h2-product-modification'>personalize your pizza</h2>
                                <ul className='pieces'>
                                    {ingredients.map(ingredient => {
                                        return (
                                            <li className='piece' key={ingredient.id}>
                                                <button className='add-additional-piece' type='button' value='add additional piece' onClick={() => addAdditionalPiece(idx, ingredient.id, ingredients.find(elem => elem.id === ingredient.id).price)}>
                                                    add
                                                </button>
                                                <button className='remove-additional-piece' type='button' value='remove additional piece' onClick={() => removeAdditionalPiece(idx, ingredient.id, ingredients.find(elem => elem.id === ingredient.id).price)}>
                                                    remove
                                                </button>
                                                <span className='additional-piece-amount'>
                                                    {product.ingredients.filter(topping => topping === ingredient.id).length}
                                                </span>
                                                <span className='additional-piece-info'>
                                                    {translate[ingredient.name].toLowerCase()}, ₿{ingredient.price}
                                                </span>
                                            </li>);
                                    })}
                                </ul>
                                <button className='remove-from-bag' type='button' value='remove from bag' onClick={() => removeFromBag(idx)}>
                                    remove from bag
                                </button>
                            </div>
                        </article>
                    );
                })}
                <article className='sauces'>
                    <h2 className='h2-sauces'>dressings and sauces</h2>
                    <ul className='ul-sauces'>
                        {sauces.map(sauce => {
                            return (
                                <li className='sauce' key={sauce.id}>
                                    <button className='add-sauce' type='button' value='add sauce' onClick={() => addSauce(sauce.id, sauce.price)}>
                                        add
                                    </button>
                                    <button className='remove-sauce' type='button' value='remove sauce' onClick={() => removeSauce(sauce.id, sauce.price)}>
                                        remove
                                    </button>
                                    <span className='sauce-amount'>
                                        {bag.sauce.find(dressing => dressing.id === sauce.id).count}
                                    </span>
                                    <span className='sauce-info'>
                                        {translate[sauce.name].toLowerCase()}, ₿{sauce.price}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </article>
            </section>
            <section className='order-info'>
                <article>
                    <h3 className='h3-order-page'>charge</h3>
                    <span className='charge'>
                        ₿{bag.total}
                    </span>
                    <button className='place-order' type='submit' value='place order'>
                        place order
                    </button>
                </article>
            </section>
        </main>
    );
};

export default OrderPage;
