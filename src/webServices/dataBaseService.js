export function getData(name) {
    const url = `http://localhost:5000/world?name=${name}`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        });
}

export function setData(bodyContent) {
    const url = "http://localhost:5000/world";
    return fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: bodyContent,
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        });
}
