import {SET_SAUCES} from '../../definitions';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_SAUCES:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
