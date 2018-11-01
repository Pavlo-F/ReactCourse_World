import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
} from '../consts/const';

const initialState = {
    name: '',
    error: '', 
    isFetching: false,
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isFetching: true, error: '' }

        case CREATE_USER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isFetching: false, name: action.payload }

        case CREATE_USER_FAIL:
        case LOGIN_FAIL:
            return { ...state, isFetching: false, error: action.payload.message }

        default:
            return state
    }
}