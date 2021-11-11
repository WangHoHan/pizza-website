import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators} from './store';
import {bindActionCreators} from 'redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import LoadingElement from './components/loading-element/LoadingElement';
import HomePage from './components/home-page/HomePage';
import ProductPage from './components/product-page/ProductPage';
import PageNotFound from './components/page-not-found/PageNotFound';
import Footer from './components/footer/Footer';

function App() {
    const dispatch = useDispatch();
    const {setLoadingFood, setLoadingIngredients, getFood, getIngredients} = bindActionCreators(actionCreators, dispatch);
    const isLoadingFood = useSelector((state) => state.loadingFood);
    const isLoadingIngredients = useSelector((state) => state.loadingIngredients);

    useEffect(() => {
        setLoadingFood(true);
        setLoadingIngredients(true);
        getFood();
        getIngredients();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <BrowserRouter>
        <Navigation />
        <Switch>
            <Route exact path='/'>
                <Redirect to='/home' />
            </Route>
            <Route exact path='/home'>
                {isLoadingFood && isLoadingIngredients ? <LoadingElement /> : <HomePage />}
            </Route>
            <Route path='/product/:id'>
                {isLoadingFood && isLoadingIngredients ? <LoadingElement /> : <ProductPage />}
            </Route>
            <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
