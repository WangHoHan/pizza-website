import {all, call, put} from 'redux-saga/effects';
import {setPopup, setPopupMessage, setLoadingFood, setFood} from '../../store/action-creators';
import {requestGetFood} from '../requests/foodRequests';

export function* handleGetFood() {
    try {
        const response = yield call(requestGetFood);
        const {data} = response;
        yield all([
            put(setFood(data)),
            put(setLoadingFood(false))
        ]);
    } catch (error) {
        if (error.message === 'Network Error') {
            yield all([
                put(setPopupMessage(error.message.toLowerCase())),
                put(setPopup(true))
            ]);
        }
        else {
            yield put(setLoadingFood(false));
        }
    }
}
