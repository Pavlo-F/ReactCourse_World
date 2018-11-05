import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    WORLD_TICK,
} from "../consts/const";

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


        const url = `http://localhost:5000/world?name=${userName}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response.json();
            })
            .then((data) => {
                console.log(data);

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data,
                });
            })
            .catch((error) => {
                console.log("Request failed", error);

                dispatch({
                    type: LOGIN_FAIL,
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

        const eventName = userName;
        const url = "http://localhost:5000/world";
        fetch(url, {
            method: "post",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                user: eventName,
                map: worldMap,
                events: worldEvents,
            }),
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);

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


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function worldTick(data) {
    return function (dispatch) {
        const { map } = { ...data.world };

        const newObjs = [];

        for (let i = 0; i < map.obj.length; i++) {
            const item = map.obj[i];

            if (item.type === "npc") {
                const randomX = getRandomInRange(-1, 1);
                const randomY = getRandomInRange(-1, 1);

                const stepX = item.cell.x + randomX;
                const stepY = item.cell.y + randomY;

                if (stepX <= map.size.width && stepX > 0) {
                    item.cell.x = stepX;
                }

                if (stepY <= map.size.height && stepY > 0) {
                    item.cell.y = stepY;
                }
            }

            newObjs.push(item);
        }

        map.obj = newObjs;

        dispatch({
            type: WORLD_TICK,
            payload: { ...data, map },
        });
    };
}
