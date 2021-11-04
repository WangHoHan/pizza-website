import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchGetFood} from '../sagas/saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchGetFood);
