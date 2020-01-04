import { GET_USER, ADD_USER } from '../actions/types';
import userService from '../services/userService';

const initialState = {
    user: {
        phutoUrl: '',
        name: '',
        uid: '',
        cardsID: [],
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            userService.addUser(action.user);
            console.log('ADD_USER_CR', action, state);
            return {
                ...state,
                user: action.user,
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
