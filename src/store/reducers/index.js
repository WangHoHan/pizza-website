import {combineReducers} from 'redux';
import loadingElementReducer from './loadingElementReducer';
import foodReducer from './foodReducer';

const reducers = combineReducers({
    loadingElement: loadingElementReducer,
    food: foodReducer
});

export default reducers;
