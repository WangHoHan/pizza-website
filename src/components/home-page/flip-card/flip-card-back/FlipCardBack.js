import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {translate} from '../../../../dictionaries/translate';
import './FlipCardBack.css';

const FlipCardBack = ({id, toppings}) => {
    const ingredients = useSelector((state) => state.ingredients);

    const pick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className='flip-card-back'>
            <h1 className='h1-flip-card-back'>toppings</h1>
            <ul className='ul-flip-card-back'>
                {ingredients.filter(ingredient => toppings.includes(ingredient.id))
                    .map(filteredIngredient => {
                        return <li className='li-flip-card-back' key={filteredIngredient.id}>{translate[filteredIngredient.name].toLowerCase()}</li>
                    })}
            </ul>
            <Link className='pick' role='button' to={`/product/${id}`} onClick={() => pick()}>
                pick
            </Link>
        </div>
    );
};

export default FlipCardBack;
