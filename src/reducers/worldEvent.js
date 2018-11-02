import {
    EVENT_REQUEST,
    EVENT_SUCCESS,
    EVENT_FAIL,
} from '../consts/const';

const initialState = {
    event: '',
    error: '', 
    isFetching: false,
}

export function eventReducer(state = initialState, action) {
    switch (action.type) {
        case EVENT_REQUEST:
            return { ...state, isFetching: true, error: '' }

        case EVENT_SUCCESS:
            return { ...state, isFetching: false, event: action.payload }

        case EVENT_FAIL:
            return { ...state, isFetching: false, error: action.payload.message }

        default:
            return state
    }
}