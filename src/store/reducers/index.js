import {combineReducers} from 'redux';
import searchBarReducer from './searchBarReducer';
import loadingFoodReducer from './loadingFoodReducer';
import loadingIngredientsReducer from './loadingIngredientsReducer';
import foodReducer from './foodReducer';
import ingredientsReducer from './ingredientsReducer';

const reducers = combineReducers({
    searchBar: searchBarReducer,
    loadingFood: loadingFoodReducer,
    loadingIngredients: loadingIngredientsReducer,
    food: foodReducer,
    ingredients: ingredientsReducer
});

export default reducers;
