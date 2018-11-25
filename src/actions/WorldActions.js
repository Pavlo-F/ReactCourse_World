import {
    EVENT_REQUEST,
    EVENT_SUCCESS,
    EVENT_FAIL,
} from "../consts/const";

import getEvent from "../services/eventService";

function requestEvent(event, dispatch) {
    dispatch({
        type: EVENT_REQUEST,
    });

    const body = JSON.stringify({
        eventName: event,
    });

    getEvent(body)
        .then((data) => {
            dispatch({
                type: EVENT_SUCCESS,
                payload: data,
            });
        })
        .catch((error) => {
            console.log("Request failed", error);

            dispatch({
                type: EVENT_FAIL,
                payload: error,
            });
        });
}

export function getTemperature() {
    return function (dispatch) {
        const event = "temperature";
        requestEvent(event, dispatch);
    };
}


export function getTimeOfday() {
    return function (dispatch) {
        const event = "timeOfday";
        requestEvent(event, dispatch);
    };
}
