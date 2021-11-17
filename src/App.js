import {read_cookie} from 'sfcookies';
import {COOKIE_NIGHT_MODE, COOKIE_BAG} from './definitions';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from './store';
import {bindActionCreators} from 'redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Popup from './components/popup/Popup';
import LoadingElement from './components/loading-element/LoadingElement';
import HomePage from './components/home-page/HomePage';
import ProductPage from './components/product-page/ProductPage';
import OrderPage from "./components/order-page/OrderPage";
import PageNotFound from './components/page-not-found/PageNotFound';
import Footer from './components/footer/Footer';

function App() {
    const dispatch = useDispatch();
    const {setNightMode, setBag, setPopup, setLoadingFood, setLoadingIngredients, setLoadingSauces, getFood, getIngredients, getSauces} = bindActionCreators(actionCreators, dispatch);
    const isPopup = useSelector((state) => state.popup)
    const popupMessage = useSelector((state) => state.popupMessage);
    const isLoadingFood = useSelector((state) => state.loadingFood);
    const isLoadingIngredients = useSelector((state) => state.loadingIngredients);
    const isLoadingSauces = useSelector((state) => state.loadingSauces);

    useEffect(() => {
        const nightMode = read_cookie(COOKIE_NIGHT_MODE);
        if (nightMode.length !== 0) {
            setNightMode({mode: nightMode, init: 'yes'});
        }
        const bag = read_cookie(COOKIE_BAG);
        if (bag.length !== 0) {
            setBag(bag);
        }
        setLoadingFood(true);
        setLoadingIngredients(true);
        setLoadingSauces(true);
        getFood();
        getIngredients();
        getSauces();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const closePopup = () => {
        setPopup(false);
    };

  return (
    <BrowserRouter>
        <Navigation />
        <Popup trigger={isPopup}>
            <h4>{popupMessage}</h4>
            <button className='ok' type='button' value='ok' onClick={() => closePopup()}>ok</button>
        </Popup>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/home' />
            </Route>
            <Route exact path='/home'>
                {isLoadingFood || isLoadingIngredients ? <LoadingElement /> : <HomePage />}
            </Route>
            <Route exact path='/product/:id'>
                {isLoadingFood || isLoadingIngredients ? <LoadingElement /> : <ProductPage />}
            </Route>
            <Route exact path='/order'>
                {isLoadingFood || isLoadingIngredients || isLoadingSauces ? <LoadingElement /> : <OrderPage />}
            </Route>
            <Route exact path='/page-not-found' component={PageNotFound} />
            <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
