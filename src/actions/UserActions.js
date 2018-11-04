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


export function createWorld(userName, worldMap, worldEvents) {
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

                dispatch({
                    type: CREATE_USER_SUCCESS,
                    payload: data.user,
                });
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


export function worldTick(props) {
    return function (dispatch) {
        const map1 = {
            size: {
                width: 10,
                height: 10,
            },
            obj: [{
                cell: { x: 2, y: 5 },
                color: "red",
                type: "npc",
            },
            {
                cell: { x: 6, y: 3 },
                color: "#9b6ee4",
                type: "npc",
            },
            {
                cell: { x: 7, y: 7 },
                color: "black",
                resource: "rock",
                type: "location",
            },
            ],
        };

        dispatch({
            type: WORLD_TICK,
            payload: { ...props, map: map1 },
        });
    };
}
