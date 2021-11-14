import {SET_LOADING_SAUCES} from '../../definitions';

const reducer = (state = true, action) => {
    switch (action.type) {
        case SET_LOADING_SAUCES:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
