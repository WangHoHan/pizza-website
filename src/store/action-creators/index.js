export const loadMenu  = (url) => {
    const getMenu = async (url) => {
        try {
            const response = await fetch(url);
            return await response.json();
        }
        catch (error) {
            console.log("data could not be fetched")
            return [];
        }
    };
    return (dispatch) => {
        return getMenu(url)
            .then(function(data) {
                dispatch({
                    type: 'LOAD_MENU',
                    payload: data
                });
            });
    }
};

