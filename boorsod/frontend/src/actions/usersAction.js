import { GET_USER, LOGIN, DELETE_USER, UPDATE_USER } from './types';
import Streams from '../api/streams';

export const login = user => async dispatch => {
    const response = await Streams.post(`/api/users`, user);
    dispatch({ type: LOGIN, payload: response.data });
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
