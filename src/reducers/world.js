import {
    CREATE_WORLD_FAIL,
    CREATE_WORLD_SUCCESS,
    GET_WORLD_SUCCESS,
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

        case CREATE_WORLD_SUCCESS:
        case GET_WORLD_SUCCESS:
        case WORLD_TICK:
            return {
                ...state, isFetching: false, name: action.payload.user, map: action.payload.map, events: action.payload.events,
            };


        case CREATE_WORLD_FAIL:
            return { ...state, isFetching: false, error: action.payload.message };

        default:
            return state;
    }
}
