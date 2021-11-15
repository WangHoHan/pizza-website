import {
    ADD_PRODUCT_TO_BAG,
    REMOVE_PRODUCT_FROM_BAG,
    ADD_INGREDIENT_TO_PRODUCT,
    REMOVE_INGREDIENT_FROM_PRODUCT,
    ADD_SAUCE_TO_BAG,
    REMOVE_SAUCE_FROM_BAG
} from '../../definitions';

const reducer = (state = {pizza: [], sauce: [{id: '0a101384-aced-4412-8457-9d43f9037a68', count: 0}, {id: '770b60c3-fe75-4cc0-8604-41bc967931e9', count: 0}, {id: 'f5390a85-d0fe-4f16-931f-196dcbfbbc36', count: 0}], total: 0}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BAG:
            const pizza = {id: action.payload.id, ingredients: action.payload.ingredients};
            let pizzaWithPushedProduct = state.pizza;
            pizzaWithPushedProduct.push(pizza);
            return {...state, pizza: pizzaWithPushedProduct, total: state.total + action.payload.money};
        case REMOVE_PRODUCT_FROM_BAG:
            let pizzaWithSplicedProduct = state.pizza;
            pizzaWithSplicedProduct.splice(action.payload.idx, 1);
            return {...state, pizza: pizzaWithSplicedProduct, total: state.total - action.payload.money};
        case ADD_INGREDIENT_TO_PRODUCT:
            let pizzaWithPushedIngredient = state.pizza;
            pizzaWithPushedIngredient[action.payload.idx].ingredients.push(action.payload.ingredient);
            return {...state, pizza: pizzaWithPushedIngredient, total: state.total + action.payload.money};
        case REMOVE_INGREDIENT_FROM_PRODUCT:
            const ingredientIdx = state.pizza[action.payload.idx].ingredients.findIndex(ingredient => ingredient === action.payload.ingredient);
            if (ingredientIdx !== -1) {
                let pizzaWithSplicedIngredient = state.pizza;
                pizzaWithSplicedIngredient[action.payload.idx].ingredients.splice(ingredientIdx, 1);
                return {...state, pizza: pizzaWithSplicedIngredient, total: state.total - action.payload.money};
            }
            return state;
        case ADD_SAUCE_TO_BAG:
            let sauceWithAddedDressing = state.sauce;
            sauceWithAddedDressing.find(sauce => sauce.id === action.payload.sauce).count++;
            return {...state, sauce: sauceWithAddedDressing, total: state.total + action.payload.money}
        case REMOVE_SAUCE_FROM_BAG:
            let sauceWithRemovedDressing = state.sauce;
            if (sauceWithRemovedDressing.find(sauce => sauce.id === action.payload.sauce).count > 0) {
                sauceWithRemovedDressing.find(sauce => sauce.id === action.payload.sauce).count--;
                return {...state, sauce: sauceWithRemovedDressing, total: state.total - action.payload.money}
            }
            return state;
        default:
            return state;
    }
};

export default reducer;
