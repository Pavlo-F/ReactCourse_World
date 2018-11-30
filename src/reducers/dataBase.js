import {
    GET_DB_DATA_FETCHING,
    GET_DB_DATA_SUCCESS,
    GET_DB_DATA_ERROR,
    MOVE_SHAPE,
} from "../consts/const";

const initialState = {
    raw: [],
    error: null,
    isFetching: false,
};

export default function worldReducer(state = initialState, action) {
    switch (action.type) {
    case GET_DB_DATA_FETCHING:
        return {
            ...state,
            isFetching: true,
        };

    case GET_DB_DATA_SUCCESS:
        return {
            ...state,
            raw: action.payload.raw,
            isFetching: false,
        };

    case GET_DB_DATA_ERROR:
        return {
            ...state,
            error: action.payload.error.message,
            isFetching: false,
        };

    case MOVE_SHAPE:
        return {
            ...state,
            raw: {
                ...state.raw,
                npc: [...action.payload],
            },
            isFetching: false,
        };

    default:
        return state;
    }
}
