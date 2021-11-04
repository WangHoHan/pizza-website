import {takeEvery, put} from 'redux-saga/effects';
import {handleGetFood} from './handlers/foodHandlers';

export function* watchGetFood() {
    yield takeEvery('GET_FOOD', handleGetFood);
}
