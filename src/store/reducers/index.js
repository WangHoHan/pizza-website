import {combineReducers} from 'redux';
import searchBarReducer from './searchBarReducer';
import loadingFoodReducer from './loadingFoodReducer';
import loadingIngredientsReducer from './loadingIngredientsReducer';
import foodReducer from './foodReducer';
import ingredientsReducer from './ingredientsReducer';
import bagReducer from './bagReducer';

const reducers = combineReducers({
    searchBar: searchBarReducer,
    loadingFood: loadingFoodReducer,
    loadingIngredients: loadingIngredientsReducer,
    food: foodReducer,
    ingredients: ingredientsReducer,
    bag: bagReducer
});

export default reducers;
