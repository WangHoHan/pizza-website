import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../store'
import {translate} from '../../dictionaries/translate';
import {pizzaPictureDictionary} from '../../dictionaries/pizzaPictureDictionary';
import './HomePage.css';
import MenuItem from './menu-item/MenuItem';

const url = 'http://localhost:3333/api/pizza';

const HomePage = () => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const {loadMenu} = bindActionCreators(actionCreators, dispatch);
    useEffect(() => {
        loadMenu(url);
    }, []);
    return (
        <main>
            <section className='section-home-page'>
                {menu.map((menuItem) => {
                    return <MenuItem key={menuItem.id} name={translate[menuItem.name]} price={menuItem.price}
                                     picture={pizzaPictureDictionary[translate[menuItem.name]]} />
                })}
            </section>
        </main>
    );
};

export default HomePage;
