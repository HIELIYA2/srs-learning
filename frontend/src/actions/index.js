// import axios from 'axios';

export const addCard = card => ({
    type: 'ADD_CARD',
    card,
    payload: fetch(`/api/card`)
        .then(response => response.json())
        .then(json => json.card),
});

export const getCards = () => ({
    type: 'GET_CARDS',
    payload: fetch(`/api/card`)
        .then(response => response.json())
        .then(json => json.card),
});
