import {
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD
} from '../actions/types';
import cardService from '../services/cardService';

const initialState = {
  cards: [],
  card: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      cardService.addCard(action.card);
      console.log(action);
      return {
        ...state,
      };
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case DELETE_CARD:
      cardService.removeCard(action.id);
      return state.cards.filter(({
        id
      }) => id !== action.id);
    case UPDATE_CARD:
      cardService.updateCard(action.card);
      console.log(action.id);
      return state.map(item => {
        if (item._id === action.card._id) return action.card;
        return item
      });
    default:
      return state;
  }
};
