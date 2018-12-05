import { getData, setData } from "../webServices/dataBaseService";

import {
    GET_DB_DATA_FETCHING,
    GET_DB_DATA_SUCCESS,
    GET_DB_DATA_ERROR,
    SET_DB_DATA_SUCCESS,
    SET_DB_DATA_ERROR,
    STATISTICS_DATA,
} from "../consts/const";

export function getDBData(objName) {
    return function (dispatch) {
        dispatch({
            type: GET_DB_DATA_FETCHING,
        });


        getData(objName)
            .then((data) => {
                dispatch({
                    type: GET_DB_DATA_SUCCESS,
                    payload: { raw: data.map },
                });

                dispatch({
                    type: STATISTICS_DATA,
                    payload: data.map.npc,
                });

            })
            .catch((error) => {
                console.log("Request failed", error);

                dispatch({
                    type: GET_DB_DATA_ERROR,
                    payload: { error },
                });
            });
    };
}


export function setDBData(objName, rawData) {
    return function (dispatch) {
        const body = JSON.stringify({
            user: objName,
            map: rawData,
        });

        setData(body)
            .then((data) => {
                dispatch({
                    type: SET_DB_DATA_SUCCESS,
                    payload: { raw: data.map },
                });
            })
            .catch((error) => {
                console.log("Request failed", error);

                dispatch({
                    type: SET_DB_DATA_ERROR,
                    payload: { error },
                });
            });
    };
}
