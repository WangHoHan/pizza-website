export const getFood  = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_FOOD'
        });
    };
};

export const setFood = (food) => {
    return (dispatch) => {
      dispatch({
          type: 'SET_FOOD',
          payload: food
      });
    };
};