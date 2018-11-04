import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    EVENT_SUCCESS,
    WORLD_TICK,
} from "../consts/const";

const initialState = {
    name: "",
    error: "",
    isFetching: false,
    map: {},
    events: [],
};

export default function worldReducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return { ...state, isFetching: true, error: "" };

    case WORLD_TICK:
    case CREATE_USER_SUCCESS:
    case LOGIN_SUCCESS:
        return {
            ...state, isFetching: false, name: action.payload.user, map: action.payload.map, events: action.payload.events,
        };

    case EVENT_SUCCESS:
        return { ...state, isFetching: false, event: action.payload };


    case CREATE_USER_FAIL:
    case LOGIN_FAIL:
        return { ...state, isFetching: false, error: action.payload.message };

    default:
        return state;
    }
}
