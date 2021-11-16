import {SET_POPUP} from '../../definitions';

const reducer = (state = false, action) => {
    switch (action.type) {
        case SET_POPUP:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
