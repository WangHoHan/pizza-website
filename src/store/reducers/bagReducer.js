import {ADD_PRODUCT_TO_BAG, REMOVE_PRODUCT_FROM_BAG} from '../../definitions';

const reducer = (state = {pizza: [], sauce: [], total: 0}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BAG:
            var {id, ingredients, money} = action.payload;
            const pizza = {id: id, ingredients: ingredients};
            var temp = state.pizza;
            temp.push(pizza);
            return {...state, pizza: temp, total: state.total + money};
        case REMOVE_PRODUCT_FROM_BAG:
            var {idx, money} = action.payload;
            var temp = state.pizza;
            temp.splice(idx, 1);
            return {...state, pizza: temp, total: state.total - money};
        default:
            return state;
    }
};

export default reducer;
