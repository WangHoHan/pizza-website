import {
    SET_SEARCH_BAR_DATA,
    SET_LOADING_FOOD,
    SET_LOADING_INGREDIENTS,
    SET_LOADING_SAUCES,
    GET_FOOD,
    SET_FOOD,
    GET_INGREDIENTS,
    SET_INGREDIENTS,
    GET_SAUCES,
    SET_SAUCES,
    SET_BAG,
    ADD_PRODUCT_TO_BAG,
    REMOVE_PRODUCT_FROM_BAG,
    ADD_INGREDIENT_TO_PRODUCT,
    REMOVE_INGREDIENT_FROM_PRODUCT,
    ADD_SAUCE_TO_BAG,
    REMOVE_SAUCE_FROM_BAG
} from '../../definitions';

export const setSearchBarData = (data) => {
    return (dispatch) => {
        dispatch({
            type: SET_SEARCH_BAR_DATA,
            payload: data
        });
    };
};

export const setLoadingFood = (value) => {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING_FOOD,
            payload: value
        });
    };
};

export const setLoadingIngredients = (value) => {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING_INGREDIENTS,
            payload: value
        });
    };
};

export const setLoadingSauces = (value) => {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING_SAUCES,
            payload: value
        });
    };
};

export const getFood  = () => {
    return (dispatch) => {
        dispatch({
            type: GET_FOOD
        });
    };
};

export const setFood = (food) => {
    return (dispatch) => {
      dispatch({
          type: SET_FOOD,
          payload: food
      });
    };
};

export const getIngredients  = () => {
    return (dispatch) => {
        dispatch({
            type: GET_INGREDIENTS
        });
    };
};

export const setIngredients = (ingredients) => {
    return (dispatch) => {
        dispatch({
            type: SET_INGREDIENTS,
            payload: ingredients
        });
    };
};

export const getSauces = () => {
    return (dispatch) => {
        dispatch({
            type: GET_SAUCES
        });
    };
};

export const setSauces = (sauces) => {
    return (dispatch) => {
        dispatch({
            type: SET_SAUCES,
            payload: sauces
        });
    };
};

export const setBag = (bag) => {
    return (dispatch) => {
        dispatch({
            type: SET_BAG,
            payload: {bag}
        });
    };
};

export const addProductToBag = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_BAG,
            payload: product
        });
    };
};

export const removeProductFromBag = (idx) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT_FROM_BAG,
            payload: idx
        });
    };
};

export const addIngredientToProduct = (idx, ingredient, money) => {
    return (dispatch) => {
        dispatch({
            type: ADD_INGREDIENT_TO_PRODUCT,
            payload: {idx: idx, ingredient: ingredient, money: money}
        });
    };
};

export const removeIngredientFromProduct = (idx, ingredient, money) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_INGREDIENT_FROM_PRODUCT,
            payload: {idx: idx, ingredient: ingredient, money: money}
        });
    };
};

export const addSauceToBag = (sauce, money) => {
    return (dispatch) => {
        dispatch({
            type: ADD_SAUCE_TO_BAG,
            payload: {sauce: sauce, money: money}
        });
    };
};

export const removeSauceFromBag = (sauce, money) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_SAUCE_FROM_BAG,
            payload: {sauce: sauce, money: money}
        });
    };
};
