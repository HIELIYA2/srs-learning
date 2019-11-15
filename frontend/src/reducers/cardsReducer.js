import { GET_CARDS, GET_CARDS_LEARN, ADD_CARD, DELETE_CARD, UPDATE_CARD } from '../actions/types';
import cardService from '../services/cardService';

const initialState = {
    cards: [],
    card: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            cardService.addCard(action.card);
            return {
                ...state,
            };
        case GET_CARDS:
            return {
                ...state,
                cards: action.payload,
            };
        case GET_CARDS_LEARN:
            return {
                ...state,
                cards: action.payload,
            };
        case DELETE_CARD:
            cardService.removeCard(action.id);
            return state.cards.filter(({ id }) => id !== action.id);
        case UPDATE_CARD:
            cardService.updateCard(action.card);
            console.log('UPDATE_CARD', action, state);
            return state;
        default:
            return state;
    }
};
