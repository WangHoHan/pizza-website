import {SET_POPUP_MESSAGE} from '../../definitions';

const reducer = (state = '', action) => {
    switch (action.type) {
        case SET_POPUP_MESSAGE:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
