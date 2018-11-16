import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    WORLD_TICK,
    GET_WORLD_FAIL,
    GET_WORLD_SUCCESS,
} from "../consts/const";

import { getWorld, setWorld } from "../services/worldService";
import move from "./NPCActions";

export function handleLogin(userName) {
    return function (dispatch) {
        if (!userName) {
            dispatch({
                type: LOGIN_FAIL,
                payload: "user name is empty",
            });

            return;
        }

        dispatch({
            type: LOGIN_REQUEST,
        });


        getWorld(userName)
            .then((data) => {

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data,
                });

                dispatch({
                    type: GET_WORLD_SUCCESS,
                    payload: data,
                });

            })
            .catch((error) => {
                console.log("Request failed", error);

                dispatch({
                    type: LOGIN_FAIL,
                    payload: error,
                });

                dispatch({
                    type: GET_WORLD_FAIL,
                    payload: error,
                });
            });
    };
}


export function createWorld(userName, worldMap, worldEvents, isSendEvent) {
    return function (dispatch) {
        if (!userName) {
            dispatch({
                type: CREATE_USER_FAIL,
                payload: "user name is empty",
            });

            return;
        }


        const body = JSON.stringify({
            user: userName,
            map: worldMap,
            events: worldEvents,
        });

        setWorld(userName, body)
            .then((data) => {

                if (isSendEvent) {
                    dispatch({
                        type: CREATE_USER_SUCCESS,
                        payload: data.user,
                    });
                }
            })
            .catch((error) => {
                console.log("Request failed", error);

                dispatch({
                    type: CREATE_USER_FAIL,
                    payload: error,
                });
            });
    };
}


export function worldTick(data) {
    return function (dispatch) {
        const { map } = data.world;

        //const newObjs = [];

        for (let i = 0; i < map.obj.length; i++) {
            const item = map.obj[i];

            move(item, map);

            //newObjs.push(item);
        }

        //map.obj = newObjs;

        dispatch({
            type: WORLD_TICK,
            //payload: { ...data, map },
        });
    };
}
