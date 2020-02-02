import { GET_USER, LOGIN } from '../actions/types';

const initialState = {
    user: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case GET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};
