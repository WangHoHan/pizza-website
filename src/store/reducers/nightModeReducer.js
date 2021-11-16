import {bake_cookie} from 'sfcookies';
import {COOKIE_NIGHT_MODE, SET_NIGHT_MODE} from '../../definitions';

const reducer = (state = false, action) => {
    switch (action.type) {
        case SET_NIGHT_MODE:
            bake_cookie(COOKIE_NIGHT_MODE, action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
