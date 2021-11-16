import {SET_NIGHT_MODE} from '../../definitions';

const reducer = (state = false, action) => {
    switch (action.type) {
        case SET_NIGHT_MODE:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
