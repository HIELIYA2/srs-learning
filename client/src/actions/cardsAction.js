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

export const getCards = user => async dispatch => {
    const CARD_URL = getUrl('cards', user.user._id);
    console.log('getCards', user, CARD_URL);
    await fetch(CARD_URL)
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: GET_CARDS,
                payload: data,
            }),
        );
};

export const getCardsToLearn = user => async dispatch => {
    const CARD_URL = getUrl('learn', user.user._id);
    console.log('getCardsToLearn', user, CARD_URL);
    await fetch(CARD_URL, {
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

function getUrl(entityName, id) {
    return process.env.NODE_ENV !== 'development'
        ? `/api/users/${entityName}/${id}`
        : `//localhost:3001/api/users/${entityName}/${id}`;
}
