import {call, put} from 'redux-saga/effects';
import {setFood} from "../../store/action-creators";
import {requestGetFood} from '../requests/foodRequests';

export function* handleGetFood() {
    try {
        const response = yield call(requestGetFood);
        const {data} = response;
        yield put(setFood(data));
    } catch (error) {
        console.log(error);
    }
}
