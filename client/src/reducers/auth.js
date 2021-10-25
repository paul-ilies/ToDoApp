import {
    AUTH_USER, AUTH_ERROR
} from "../actions/types";



export const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, userInfo: action.payload }
        case AUTH_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}






