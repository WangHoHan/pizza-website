import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../store'
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './HomePage.css';
import LoadingElement from '../loading-element/LoadingElement';
import HomePageElement from './home-page-element/HomePageElement';

const HomePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loadingElement);
    const food = useSelector((state) => state.food);
    const {setLoadingElement, getFood} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        setLoadingElement(true);
        getFood();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        {isLoading ? <LoadingElement /> : <main>
                <section className='section-home-page'>
                    {food.map((homePageElement) => {
                        return <HomePageElement key={homePageElement.id} name={translate[homePageElement.name]}
                                                price={homePageElement.price}
                                                picture={pizzaPictureDictionary[translate[homePageElement.name]]} />
                    })}
                </section>
            </main>}
        </>
    );
};

export default HomePage;
