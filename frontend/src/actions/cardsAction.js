import {
  GET_CARDS,
  ADD_CARD
} from './types';

export const addCard = card => ({
  type: ADD_CARD,
  card,
  payload: fetch(`/api/card`)
    .then(response => response.json())
    .then(json => json.card),
});

export const getCards = () => dispatch => {
  fetch('http://localhost:3000/api/card')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_CARDS,
        payload: data,
      }),
    );
};
