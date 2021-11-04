import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/navigation/logo.png';
import pizzaBox from '../../assets/navigation/pizza-box.png';
import pixarOff from '../../assets/navigation/night-mode/pixar-off.png';
import './Navigation.css';
import SearchBar from './search-bar/SearchBar';

const Navigation = () => {
    return (
        <header className='header-navigation'>
            <nav className='nav-navigation'>
                <picture className='logo-navigation'>
                    <source srcSet={logo} />
                    <Link to='/home'>
                        <img className='pizza-logo' src={logo} alt='Pizza logo' />
                    </Link>
                </picture>
                <SearchBar />
                <picture className='shopping-cart-navigation'>
                    <source srcSet={pizzaBox} />
                    <img className='pizza-box' src={pizzaBox} alt='Pizza box' />
                </picture>
                <picture>
                    <source srcSet={pixarOff} />
                    <img className='pixar-off' src={pixarOff} alt='Pixar off' />
                </picture>
            </nav>
        </header>
    );
};

export default Navigation;
