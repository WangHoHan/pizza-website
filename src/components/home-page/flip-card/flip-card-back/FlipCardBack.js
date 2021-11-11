import React from 'react';
import {useSelector} from 'react-redux';
import {translate} from '../../../../dictionaries/translate';
import './FlipCardBack.css';

const FlipCardBack = ({toppings}) => {
    const ingredients = useSelector((state) => state.ingredients);

    return (
        <div className='flip-card-back'>
            <h1 className='h1-flip-card-back'>ingredients</h1>
            <ul className='ul-flip-card-back'>
                {ingredients.length && ingredients.filter(ingredient => toppings.includes(ingredient.id))
                    .map(filteredIngredient => {
                    return <li className='li-flip-card-back' key={filteredIngredient.id}>{translate[filteredIngredient.name].toLowerCase()}</li>
                })}
            </ul>
            <button className='pick'>pick</button>
        </div>
    );
};

export default FlipCardBack;
