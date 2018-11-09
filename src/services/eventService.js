export default function getEvent(bodyContent) {

    const url = "http://localhost:5000/event";

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