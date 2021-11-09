import {SET_LOADING_INGREDIENTS} from '../../definitions';

const reducer = (state = true, action) => {
    switch (action.type) {
        case SET_LOADING_INGREDIENTS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
