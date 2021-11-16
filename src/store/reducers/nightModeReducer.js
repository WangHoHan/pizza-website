import {bake_cookie} from 'sfcookies';
import {COOKIE_NIGHT_MODE, SET_NIGHT_MODE} from '../../definitions';

const reducer = (state = false, action) => {
    switch (action.type) {
        case SET_NIGHT_MODE:
            if (action.payload.init === 'yes') {
                if (action.payload.mode === true) {
                    document.body.classList.toggle('dark');
                }
            }
            else {
                document.body.classList.toggle('dark');
            }
            bake_cookie(COOKIE_NIGHT_MODE, action.payload.mode);
            return action.payload.mode;
        default:
            return state;
    }
};

export default reducer;
