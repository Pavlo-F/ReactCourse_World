import {
    MOVE_SHAPE,
} from "../consts/const";

const initialState = {
    raw: [],
    error: null,
    isFetching: false,
};

export default function behaveReducer(state = initialState, action) {
    switch (action.type) {
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
