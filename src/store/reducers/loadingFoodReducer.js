import {SET_LOADING_FOOD} from '../../definitions';

const reducer = (state = true, action) => {
    switch (action.type) {
        case SET_LOADING_FOOD:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
