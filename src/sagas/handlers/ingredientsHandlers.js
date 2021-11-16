import {all, call, put} from 'redux-saga/effects';
import {setPopupMessage, setPopup, setLoadingIngredients, setIngredients} from '../../store/action-creators';
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
        if (error.message === 'Network Error') {
            yield all([
                put(setLoadingIngredients(false)),
                put(setPopupMessage(error.message.toLowerCase())),
                put(setPopup(true))
            ]);
        }
        else {
            yield put(setLoadingIngredients(false));
        }
    }
}
