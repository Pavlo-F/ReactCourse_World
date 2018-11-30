import {
    MOVE_SHAPE,
} from "../consts/const";

import AI from "../AI";


export default function move(data, algoritm) {
    const newObjs = AI[algoritm](data);

    return function (dispatch) {
        dispatch({
            type: MOVE_SHAPE,
            payload: newObjs,
        });
    };
}
