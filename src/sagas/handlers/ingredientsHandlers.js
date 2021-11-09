import {all, call, put} from 'redux-saga/effects';
import {setLoadingIngredients, setIngredients} from '../../store/action-creators';
import {requestGetIngredients} from "../requests/ingredientsRequests";

export function* handleGetIngredients() {
    try {
        const response = yield call(requestGetIngredients);
        const {data} = response;
        yield all([
            put(setIngredients(data)),
            put(setLoadingIngredients(false))
        ]);
    } catch (error) {
        console.log(error);
        yield put(setLoadingIngredients(false));
    }
}
