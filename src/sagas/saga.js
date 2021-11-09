import {takeEvery} from 'redux-saga/effects';
import {GET_FOOD, GET_INGREDIENTS} from '../definitions';
import {handleGetFood} from './handlers/foodHandlers';
import {handleGetIngredients} from './handlers/ingredientsHandlers';

export function* watchGetFood() {
    yield takeEvery(GET_FOOD, handleGetFood);
}

export function* watchGetIngredients() {
    yield takeEvery(GET_INGREDIENTS, handleGetIngredients);
}
