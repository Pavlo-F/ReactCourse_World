import {
    WORLD_TICK,
} from "../consts/const";

const initialState = {
    name: "",
};

export default function npcReducer(state = initialState, action) {
    switch (action.type) {
        case WORLD_TICK:
        return { ...state};


    default:
        return state;
    }
}
