import {takeEvery} from 'redux-saga/effects';
import {GET_FOOD, GET_INGREDIENTS, GET_SAUCES} from '../definitions';
import {handleGetFood} from './handlers/foodHandlers';
import {handleGetIngredients} from './handlers/ingredientsHandlers';
import {handleGetSauces} from './handlers/saucesHandlers';

export function* watchGetFood() {
    yield takeEvery(GET_FOOD, handleGetFood);
}

export function* watchGetIngredients() {
    yield takeEvery(GET_INGREDIENTS, handleGetIngredients);
}

export function* watchGetSauces() {
    yield takeEvery(GET_SAUCES, handleGetSauces);
}
