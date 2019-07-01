const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ];
        case 'DELETE_CARD':
            return [state.filter(({ id }) => id !== action.id)];
        default:
            return state;
    }
};

export default cards;
