import {all, call, put} from 'redux-saga/effects';
import {setLoadingSauces, setSauces} from '../../store/action-creators';
import {requestGetSauces} from '../requests/saucesRequests';

export function* handleGetSauces() {
    try {
        const response = yield call(requestGetSauces);
        const {data} = response;
        yield all([
            put(setSauces(data)),
            put(setLoadingSauces(false))
        ]);
    } catch (error) {
        console.log(error);
        yield put(setLoadingSauces(false));
    }
}
