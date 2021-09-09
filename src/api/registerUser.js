import {baseUrl} from "./urls";

async function registerUser(credentials) {
    console.log(credentials);
    return fetch(baseUrl + 'create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        // .then(async function(response) {
        //     // console.log(response.status);
        //     let res = await response.json()
        //     return { res, status: response.status}
        // });
}

export default registerUser;
