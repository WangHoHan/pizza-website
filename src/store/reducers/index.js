import {combineReducers} from 'redux';
import searchBarReducer from './searchBarReducer';
import loadingElementReducer from './loadingElementReducer';
import foodReducer from './foodReducer';

const reducers = combineReducers({
    searchBar: searchBarReducer,
    loadingElement: loadingElementReducer,
    food: foodReducer
});

export default reducers;
