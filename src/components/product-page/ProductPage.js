import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from '../../store';
import {bindActionCreators} from 'redux';
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './ProductPage.css'

const ProductPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {addProductToBag} = bindActionCreators(actionCreators, dispatch);
    const pizza = useSelector((state) => state.food.find(pizza => pizza.id === id));
    const ingredients = useSelector((state) => state.ingredients);

    const [additionalIngredients, setAdditionalIngredients] = useState([]);
    const [money, setMoney] = useState(pizza.price);

    const addAdditionalIngredient = (ingredient) => {
        setAdditionalIngredients(additionalIngredients => [...additionalIngredients, ingredient]);
        const elem = ingredients.find(elem => elem.id === ingredient);
        addToMoney(elem.price);
    };

    const removeAdditionalIngredient = (ingredient) => {
        const idx = additionalIngredients.findIndex(additionalIngredient => additionalIngredient === ingredient);
        if (idx !== -1) {
            let temp = [...additionalIngredients];
            temp.splice(idx, 1);
            setAdditionalIngredients(temp);
            const elem = ingredients.find(elem => elem.id === ingredient);
            subtractFromMoney(elem.price);
        }
    };

    const addToMoney = (prix) => {
        setMoney(money + prix);
    };

    const subtractFromMoney = (prix) => {
        setMoney(money - prix);
    };

    const addToBag = () => {
        addProductToBag({id: pizza.id, ingredients: additionalIngredients, money: money});
    };

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
                            {ingredients.filter(ingredient => pizza.ingredients.includes(ingredient.id))
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
                        {ingredients.map(ingredient => {
                                return (
                                    <li className='ingredient' key={ingredient.id}>
                                        <button className='add-additional-ingredient' onClick={() => addAdditionalIngredient(ingredient.id)}>
                                            add
                                        </button>
                                        <button className='remove-additional-ingredient' onClick={() => removeAdditionalIngredient(ingredient.id)}>
                                            remove
                                        </button>
                                        <span className='additional-ingredient-amount'>
                                            {additionalIngredients.filter(additionalIngredient => additionalIngredient === ingredient.id).length}
                                        </span>
                                        <span className='additional-ingredient-info'>
                                            {translate[ingredient.name].toLowerCase()}, ₿{ingredient.price}
                                        </span>
                                    </li>);
                            })}
                    </ul>
                </article>
            </section>
            <section className='pricing'>
                <article>
                    <h3 className='h3-product-page'>money</h3>
                    <span className='money'>
                        ₿{money}
                    </span>
                    <Link to='/home' className='add-to-bag' type='submit' onClick={() => addToBag()}>
                        add to bag
                    </Link>
                </article>
            </section>
        </main>
    );
};

export default ProductPage;
