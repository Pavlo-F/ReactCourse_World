import {
    MOVE_SHAPE,
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
    };
}
