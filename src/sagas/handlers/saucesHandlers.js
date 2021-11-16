import {all, call, put} from 'redux-saga/effects';
import {setPopupMessage, setPopup, setLoadingSauces, setSauces, initSaucesToBag} from '../../store/action-creators';
import {requestGetSauces} from '../requests/saucesRequests';

export function* handleGetSauces() {
    try {
        const response = yield call(requestGetSauces);
        const {data} = response;
        yield all([
            put(setSauces(data)),
            put(initSaucesToBag(data)),
            put(setLoadingSauces(false))
        ]);
    } catch (error) {
        if (error.message === 'Network Error') {
            yield all([
                put(setLoadingSauces(false)),
                put(setPopupMessage(error.message.toLowerCase())),
                put(setPopup(true))
            ]);
        }
        else {
            yield put(setLoadingSauces(false));
        }
    }
}
