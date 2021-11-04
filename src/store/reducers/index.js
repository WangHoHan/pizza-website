import {combineReducers} from 'redux';
import foodReducer from './foodReducer';

const reducers = combineReducers({
    food: foodReducer
});

export default reducers;
