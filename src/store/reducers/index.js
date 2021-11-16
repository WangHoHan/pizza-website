import {combineReducers} from 'redux';
import searchBarReducer from './searchBarReducer';
import popupReducer from './popupReducer.js';
import popupMessageReducer from './popupMessageReducer';
import loadingFoodReducer from './loadingFoodReducer';
import loadingIngredientsReducer from './loadingIngredientsReducer';
import loadingSaucesReducer from './loadingSaucesReducer';
import foodReducer from './foodReducer';
import ingredientsReducer from './ingredientsReducer';
import saucesReducer from './saucesReducer';
import bagReducer from './bagReducer';

const reducers = combineReducers({
    searchBar: searchBarReducer,
    popup: popupReducer,
    popupMessage: popupMessageReducer,
    loadingFood: loadingFoodReducer,
    loadingIngredients: loadingIngredientsReducer,
    loadingSauces: loadingSaucesReducer,
    food: foodReducer,
    ingredients: ingredientsReducer,
    sauces: saucesReducer,
    bag: bagReducer
});

export default reducers;
