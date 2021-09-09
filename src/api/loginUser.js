import {baseUrl} from "./urls";

async function loginUser(credentials) {
    console.log(credentials);
    return fetch(baseUrl + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default loginUser;
