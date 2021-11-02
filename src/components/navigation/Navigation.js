import React from 'react';
import {Link} from 'react-router-dom';
import Switch from "react-switch";
import crescent from '../../assets/navigation/crescent.png';
import logo from '../../assets/navigation/logo.png';
import pizzaBox from '../../assets/navigation/pizza-box.png';
import './Navigation.css';
import SearchBar from './search-bar/SearchBar';
import './search-bar/SearchBar.css';

const Navigation = () => {
    return (
        <header>
            <nav>
                <picture className='logo'>
                    <source srcSet={logo} />
                    <Link to='/'>
                        <img className='pizza-logo' src={logo} alt='Pizza logo' />
                    </Link>
                </picture>
                <SearchBar />
                <picture className='shopping-cart'>
                    <source srcSet={pizzaBox} />
                    <img className='pizza-box' src={pizzaBox} alt='Pizza box' />
                </picture>
                <div className='night-mode'>
                    <picture>
                        <source srcSet={crescent} />
                        <img className='crescent' src={crescent} alt='Crescent' />
                    </picture>
                    <Switch checked={false} />
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
