import {
    SPAWN_SHAPE,
} from "../consts/const";


export default function spawn(data, newObj) {
    const newObjs = {
        ...data,
        npc: [...data.npc],
    };

    newObjs.npc.push(newObj);

    return function (dispatch) {
        dispatch({
            type: SPAWN_SHAPE,
            payload: newObjs.npc,
        });
    };
}
