import {all, call, put} from 'redux-saga/effects';
import {setLoadingElement, setFood} from "../../store/action-creators";
import {requestGetFood} from '../requests/foodRequests';

export function* handleGetFood() {
    try {
        const response = yield call(requestGetFood);
        const {data} = response;
        yield all([
            put(setFood(data)),
            put(setLoadingElement(false))
        ]);
    } catch (error) {
        console.log(error);
        yield put(setLoadingElement(false));
    }
}
