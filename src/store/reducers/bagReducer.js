import {bake_cookie} from 'sfcookies';

import {
    COOKIE_BAG,
    SET_BAG,
    INIT_SAUCES_TO_BAG,
    ADD_PRODUCT_TO_BAG,
    REMOVE_PRODUCT_FROM_BAG,
    ADD_INGREDIENT_TO_PRODUCT,
    REMOVE_INGREDIENT_FROM_PRODUCT,
    ADD_SAUCE_TO_BAG,
    REMOVE_SAUCE_FROM_BAG
} from '../../definitions';

const reducer = (state = {pizza: [], sauce: [], total: 0}, action) => {
    switch (action.type) {
        case SET_BAG:
            return action.payload.bag;
        case INIT_SAUCES_TO_BAG:
            const sauceWithInitDressings = state.sauce;
            action.payload.sauces.forEach(sauce => {
                sauceWithInitDressings.push({id: sauce.id, count: 0});
            });
            return {...state, sauce: sauceWithInitDressings};
        case ADD_PRODUCT_TO_BAG:
            const pizza = {id: action.payload.id, ingredients: action.payload.ingredients};
            let pizzaWithPushedProduct = state.pizza;
            pizzaWithPushedProduct.push(pizza);
            bake_cookie(COOKIE_BAG, {...state, pizza: pizzaWithPushedProduct, total: state.total + action.payload.money});
            return {...state, pizza: pizzaWithPushedProduct, total: state.total + action.payload.money};
        case REMOVE_PRODUCT_FROM_BAG:
            let pizzaWithSplicedProduct = state.pizza;
            pizzaWithSplicedProduct.splice(action.payload.idx, 1);
            bake_cookie(COOKIE_BAG, {...state, pizza: pizzaWithSplicedProduct, total: state.total - action.payload.money});
            return {...state, pizza: pizzaWithSplicedProduct, total: state.total - action.payload.money};
        case ADD_INGREDIENT_TO_PRODUCT:
            let pizzaWithPushedIngredient = state.pizza;
            pizzaWithPushedIngredient[action.payload.idx].ingredients.push(action.payload.ingredient);
            bake_cookie(COOKIE_BAG, {...state, pizza: pizzaWithPushedIngredient, total: state.total + action.payload.money});
            return {...state, pizza: pizzaWithPushedIngredient, total: state.total + action.payload.money};
        case REMOVE_INGREDIENT_FROM_PRODUCT:
            const ingredientIdx = state.pizza[action.payload.idx].ingredients.findIndex(ingredient => ingredient === action.payload.ingredient);
            if (ingredientIdx !== -1) {
                let pizzaWithSplicedIngredient = state.pizza;
                pizzaWithSplicedIngredient[action.payload.idx].ingredients.splice(ingredientIdx, 1);
                bake_cookie(COOKIE_BAG, {...state, pizza: pizzaWithSplicedIngredient, total: state.total - action.payload.money});
                return {...state, pizza: pizzaWithSplicedIngredient, total: state.total - action.payload.money};
            }
            return state;
        case ADD_SAUCE_TO_BAG:
            let sauceWithAddedDressing = state.sauce;
            sauceWithAddedDressing.find(sauce => sauce.id === action.payload.sauce).count++;
            bake_cookie(COOKIE_BAG, {...state, sauce: sauceWithAddedDressing, total: state.total + action.payload.money});
            return {...state, sauce: sauceWithAddedDressing, total: state.total + action.payload.money};
        case REMOVE_SAUCE_FROM_BAG:
            let sauceWithRemovedDressing = state.sauce;
            if (sauceWithRemovedDressing.find(sauce => sauce.id === action.payload.sauce).count > 0) {
                sauceWithRemovedDressing.find(sauce => sauce.id === action.payload.sauce).count--;
                bake_cookie(COOKIE_BAG, {...state, sauce: sauceWithRemovedDressing, total: state.total - action.payload.money});
                return {...state, sauce: sauceWithRemovedDressing, total: state.total - action.payload.money};
            }
            return state;
        default:
            return state;
    }
};

export default reducer;
