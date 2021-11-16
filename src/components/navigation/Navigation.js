import React  from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from '../../store';
import {bindActionCreators} from 'redux';
import logo from '../../assets/navigation/logo.png';
import pizzaBox from '../../assets/navigation/pizza-box.png';
import pixarOn from '../../assets/navigation/night-mode/pixar-on.png';
import pixarOff from '../../assets/navigation/night-mode/pixar-off.png';
import './Navigation.css';
import SearchBar from './search-bar/SearchBar';

const Navigation = () => {
    const dispatch = useDispatch();
    const {setNightMode} = bindActionCreators(actionCreators, dispatch);
    const isNightMode = useSelector((state) => state.nightMode);

    const changeNightMode = (mode) => {
        setNightMode({mode: mode, init: 'no'});
    }

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
                    <Link to='/order'>
                        <img className='pizza-box' src={pizzaBox} alt='Pizza box' />
                    </Link>
                </picture>
                {isNightMode ?
                    <picture>
                        <source srcSet={pixarOn} />
                        <img className='pixar' src={pixarOff} alt='Pixar on' onClick={() => changeNightMode(false)} />
                    </picture> :
                    <picture>
                        <source srcSet={pixarOff} />
                        <img className='pixar' src={pixarOff} alt='Pixar off' onClick={() => changeNightMode(true)} />
                    </picture>}
            </nav>
        </header>
    );
};

export default Navigation;
