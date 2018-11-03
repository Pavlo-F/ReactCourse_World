import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
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
                    payload: data.user,
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


export function createUser(userName) {
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
                map: { 1: 1 },
                events: [{ 1: 1 }, { 1: 2 }],
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
