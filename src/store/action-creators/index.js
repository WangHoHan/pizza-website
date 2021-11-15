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
    ADD_PRODUCT_TO_BAG,
    REMOVE_PRODUCT_FROM_BAG
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

export const getSauces = (sauces) => {
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
