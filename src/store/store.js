import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {watchGetFood, watchGetIngredients, watchGetSauces} from '../sagas/saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watchGetFood);
sagaMiddleware.run(watchGetIngredients);
sagaMiddleware.run(watchGetSauces);
