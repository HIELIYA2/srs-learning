import { GET_USER, LOGIN, DELETE_USER, UPDATE_USER, GET_CARDS_LEARN } from './types';
import Streams from '../api/streams';

export const login = user => async dispatch => {
    const response = await Streams.post(`/api/users`, user);
    dispatch({ type: LOGIN, payload: response.data });
    fetch(`http://localhost:3000/api/users/cards/${response.data._id}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: GET_CARDS_LEARN,
                payload: data,
            }),
        );
};

export const deleteUser = id => ({
    type: DELETE_USER,
    id,
    payload: fetch(`/api/users/${id}`)
        .then(response => response.json())
        .then(json => json.user),
});

export const updateUser = user => async dispatch => {
    const response = await Streams.put(`/api/users/${user._id}`, user);
    dispatch({ type: UPDATE_USER, payload: response.data });
};

export const getUser = () => {
    return {
        type: GET_USER,
    };
};
