import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import HomePage from './components/home-page/HomePage';
import ProductPage from './components/product-page/ProductPage';
import PageNotFound from './components/page-not-found/PageNotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Switch>
            <Route exact path='/'>
                <Redirect to='/home' />
            </Route>
            <Route exact path='/home' component={HomePage} />
            <Route path='/product/:id' children={ProductPage} />
            <Route path='*' component={PageNotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
