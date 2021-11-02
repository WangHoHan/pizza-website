export const loadMenu = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_MENU'
        });
    }
};
