// import axios from 'axios';

let nextCardId = 0;
export const addCard = card => ({
    type: 'ADD_CARD',
    id: nextCardId++,
    card,
    payload: fetch(`/api/card`)
        .then(response => response.json())
        .then(json => json.card),
});

// export const getCard = id => async dispatch => ({
//    const response =  await .get(  `/card/${id}`);
//    dispatch({type:GET_CARD,
//   payload:response.DATA})
// });
