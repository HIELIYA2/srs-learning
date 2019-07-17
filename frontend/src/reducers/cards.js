// import card from '../cmps/card/card';
import cardService from '../services/cardService';

const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            cardService.addCard(action.card);
            console.log(action.card);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.card,
                    completed: false,
                },
            ];
        case 'DELETE_CARD':
            cardService.removeCard(action.id);
            console.log(action.id);
            return [state.filter(({ id }) => id !== action.id)];
        case 'GET_CARDS':
            return [];
        default:
            return state;
    }
};

export default cards;
