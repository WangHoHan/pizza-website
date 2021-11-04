const reducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FOOD':
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
