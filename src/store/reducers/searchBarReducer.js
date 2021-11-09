import {SET_SEARCH_BAR_DATA} from '../../definitions';

const reducer = (state = '', action) => {
    switch (action.type) {
        case SET_SEARCH_BAR_DATA:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
