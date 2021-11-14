import {ADD_PRODUCT_TO_BAG} from '../../definitions';

const reducer = (state = {pizza: [], sauce: [], total: 0}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BAG:
            const {id, ingredients, money} = action.payload;
            const pizza = {id: id, ingredients: ingredients}
            state.pizza.push(pizza);
            state.total += money;
            return state;
        default:
            return state;
    }
};

export default reducer;
