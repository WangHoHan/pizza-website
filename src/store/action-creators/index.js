export const loadMenu  = (url) => {

    const getMenu = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    return (dispatch) => {
        return getMenu(url)
            .then(function(data) {
                dispatch({
                    type: 'LOAD_MENU',
                    payload: data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: 'LOAD_MENU',
                    payload: []
                });
            });
    }
};

