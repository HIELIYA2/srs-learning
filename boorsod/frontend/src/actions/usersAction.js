import { GET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from './types';
import Streams from '../api/streams';

export const addUser = user => ({
    type: ADD_USER,
    user,
    payload: fetch(`/api/user`)
        .then(response => response.json())
        .then(json => json.user),
});

export const deleteUser = id => ({
    type: DELETE_USER,
    id,
    payload: fetch(`/api/user/${id}`)
        .then(response => response.json())
        .then(json => json.user),
});

export const updateUser = user => async dispatch => {
    console.log('update card', user);
    const response = await Streams.put(`/api/card/${user._id}`, user);
    dispatch({ type: UPDATE_USER, payload: response.data });
};

export const getUser = () => dispatch => {
    fetch('http://localhost:3000/api/user')
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: GET_USER,
                payload: data,
            }),
        );
};
