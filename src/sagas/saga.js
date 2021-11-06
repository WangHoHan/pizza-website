import {takeEvery} from 'redux-saga/effects';
import {GET_FOOD} from '../definitions';
import {handleGetFood} from './handlers/foodHandlers';

export function* watchGetFood() {
    yield takeEvery(GET_FOOD, handleGetFood);
}
