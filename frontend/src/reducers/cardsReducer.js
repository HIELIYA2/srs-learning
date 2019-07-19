import {
  GET_CARDS,
  ADD_CARD
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
      return [
        ...state,
      ];
    case GET_CARDS:
      console.log('redux');
      return {
        ...state,
        cards: action.payload,
      };
    // case DELETE_CARD:
    //   cardService.removeCard(action.id);
    //   console.log(action.id);
    //   return [state.filter(({
    //     id
    //   }) => id !== action.id)];
    default:
      return state;
  }
};
