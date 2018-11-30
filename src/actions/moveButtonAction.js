import {
    MOVE_SHAPE,
} from "../consts/const";

import AI from "../AI";


export default function move(points, width, height, algoritm) {
    const newPoints = AI[algoritm](points, width, height);

    return function (dispatch) {
        dispatch({
            type: MOVE_SHAPE,
            payload: newPoints,
        });
    };
}
