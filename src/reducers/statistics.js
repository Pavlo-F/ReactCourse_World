import {
    STATISTICS_DATA,
} from "../consts/const";

import getStatistics from "../utils/statisticsUtil";

const initialState = {
    lifeStat: {},
    error: null,
    isFetching: false,
};

export default function behaveReducer(state = initialState, action) {
    switch (action.type) {
    case STATISTICS_DATA:
        return {
            ...state,
            isFetching: false,
            lifeStat: getStatistics(action.payload),
        };

    default:
        return state;
    }
}
