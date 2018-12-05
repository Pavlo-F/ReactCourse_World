import {
    MOVE_SHAPE,
    STATISTICS_DATA,
} from "../consts/const";

import AI from "../AI";


export default function move(data, algoritms) {
    const newObjs = {
        ...data,
        npc: [...data.npc],
    };

    algoritms.forEach((alg) => {
        newObjs.npc = AI[alg](newObjs);
    });

    return function (dispatch) {
        dispatch({
            type: MOVE_SHAPE,
            payload: newObjs.npc,
        });

        dispatch({
            type: STATISTICS_DATA,
            payload: newObjs.npc,
        });
    };
}
