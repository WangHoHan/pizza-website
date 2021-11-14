import {ADD_PRODUCT_TO_BAG} from '../../definitions';

const reducer = (state = {pizza: [], sauce: [], total: 0}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BAG:
            state.pizza.push(action.payload);
            return state;
        default:
            return state;
    }
};

export default reducer;
