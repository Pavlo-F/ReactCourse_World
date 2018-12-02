import {
    MOVE_SHAPE,
} from "../consts/const";

import AI from "../AI";


export default function move(data, algoritms) {
    let newObjs = [];

    newObjs = data;


    algoritms.map((alg) => {
        newObjs.npc = AI[alg](newObjs);
        return newObjs.npc;
    });

    return function (dispatch) {
        dispatch({
            type: MOVE_SHAPE,
            payload: newObjs.npc,
        });
    };
}
