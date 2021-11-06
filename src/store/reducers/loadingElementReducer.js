import {SET_LOADING_ELEMENT} from '../../definitions';

const reducer = (state = true, action) => {
    switch (action.type) {
        case SET_LOADING_ELEMENT:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
