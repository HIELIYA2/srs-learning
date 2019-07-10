import Axios from 'axios';
const CARD_URL = getUrl('card');
const resolveData = (res: { data: any }) => res.data;

function addCard(card: any) {
    return Axios.create({ withCredentials: true })
        .post(CARD_URL, card)
        .then(resolveData);
}

function query() {
    return Axios.create({ withCredentials: true })
        .get(CARD_URL)
        .then(resolveData);
}

function getCardById(cardId: string) {
    return Axios.create({ withCredentials: true })
        .get(`${CARD_URL}/${cardId}`)
        .then(resolveData);
}

function removeCard(cardId: string) {
    return Axios.create({ withCredentials: true })
        .delete(`${CARD_URL}/${cardId}`)
        .then(resolveData);
}

function updateCard(card: { _id: any }) {
    return Axios.create({ withCredentials: true })
        .put(`${CARD_URL}/${card._id}`)
        .then(resolveData);
}

function getUrl(entityName: string) {
    return process.env.NODE_ENV !== 'development' ? `/api/${entityName}` : `//localhost:3000/api/${entityName}`;
}

export default {
    query,
    getCardById,
    removeCard,
    addCard,
    updateCard,
};
