const reducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_MENU':
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
