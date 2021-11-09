import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from '../../store'
import {bindActionCreators} from 'redux';
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './HomePage.css';
import LoadingElement from '../loading-element/LoadingElement';
import HomePageElement from './home-page-element/HomePageElement';

const HomePage = () => {
    const dispatch = useDispatch();
    const searchBarData = useSelector((state) => state.searchBar)
    const isLoadingFood = useSelector((state) => state.loadingFood);
    const isLoadingIngredients = useSelector((state) => state.loadingIngredients);
    const food = useSelector((state) => state.food);
    const ingredients = useSelector((state) => state.ingredients);
    const {setLoadingFood, setLoadingIngredients, getFood, getIngredients} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        setLoadingFood(true);
        setLoadingIngredients(true);
        getFood();
        getIngredients();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
        {isLoadingFood && isLoadingIngredients ? <LoadingElement /> : <section className='section-home-page'>
                {food.filter(homePageElement => translate[homePageElement.name].toLowerCase().includes(searchBarData.toLowerCase()))
                    .map(filteredHomePageElement => {
                    return <HomePageElement key={filteredHomePageElement.id}
                                            name={translate[filteredHomePageElement.name]}
                                            price={filteredHomePageElement.price}
                                            picture={pizzaPictureDictionary[translate[filteredHomePageElement.name]]} />
                })}
            </section>}
        </main>
    );
};

export default HomePage;
