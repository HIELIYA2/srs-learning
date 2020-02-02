import { GET_CARDS, GET_CARDS_LEARN, ADD_CARD, DELETE_CARD, UPDATE_CARD } from './types';
import Streams from '../api/streams';

export const addCard = card => async dispatch => {
    const response = await Streams.post(`/api/card`, card);
    dispatch({ type: ADD_CARD, payload: response.data });
};

export const deleteCard = id => ({
    type: DELETE_CARD,
    id,
    payload: fetch(`/api/card/${id}`)
        .then(response => response.json())
        .then(json => json.card),
});

export const updateCard = card => async dispatch => {
    const response = await Streams.put(`/api/card/${card._id}`, card);
    dispatch({ type: UPDATE_CARD, payload: response.data });
};

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

export const getCardsToLearn = user => async dispatch => {
    await fetch(`http://localhost:3000/api/users/cards/${user.user._id}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_CARDS_LEARN,
                payload: data,
            });
        });
};
