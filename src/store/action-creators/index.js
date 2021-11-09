import {SET_SEARCH_BAR_DATA, SET_LOADING_ELEMENT, GET_FOOD, SET_FOOD} from '../../definitions';

export const setSearchBarData = (data) => {
    return (dispatch) => {
        dispatch({
            type: SET_SEARCH_BAR_DATA,
            payload: data
        });
    };
};

export const setLoadingElement = (value) => {
    return (dispatch) => {
        dispatch({
            type: SET_LOADING_ELEMENT,
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