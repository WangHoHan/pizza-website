import {
    SET_SEARCH_BAR_DATA,
    SET_LOADING_FOOD,
    SET_LOADING_INGREDIENTS,
    GET_FOOD,
    SET_FOOD,
    GET_INGREDIENTS,
    SET_INGREDIENTS,
    ADD_PRODUCT_TO_BAG
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

export const addProductToBag = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_BAG,
            payload: product
        });
    };
};
