import cards from '../services/Data/cards.json';

const initState = {
    cards,
};

const rootReducer = (state = initState, action: any) => {
    console.log(action);
    console.log(initState.cards);
    return state;
};

export default rootReducer;
