import React from 'react';
import {useSelector} from 'react-redux';
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './HomePage.css';
import FlipCard from './flip-card/FlipCard';

const HomePage = () => {
    const searchBarData = useSelector((state) => state.searchBar)
    const food = useSelector((state) => state.food);

    return (
        <main>
            <section className='section-home-page'>
                {food.filter(pizza => translate[pizza.name].toLowerCase().includes(searchBarData.toLowerCase()))
                    .map(filteredPizza => {
                    return <FlipCard key={filteredPizza.id}
                                     id={filteredPizza.id}
                                     toppings={filteredPizza.ingredients}
                                     name={translate[filteredPizza.name]}
                                     price={filteredPizza.price}
                                     picture={pizzaPictureDictionary[translate[filteredPizza.name]]} />
                })}
            </section>
        </main>
    );
};

export default HomePage;
