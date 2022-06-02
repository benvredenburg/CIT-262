import fetch from 'node-fetch';

it ('Should Respond', async () => {
    const answer = await fetch ('http://34.168.221.70');
    console.log(answer);
})

//import {login} from '../utils/login.js';

// it ('Should get login token', async () => {
//     const loginRequest = {
//         userName:"vredenburgben@gmail.com",
//         password:"N7T5PpQz!",
//     }

//     const token = await login(loginRequest);
//     console.log("Token "+ token)
// })