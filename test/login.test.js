import {login} from '../utils/login.js';

it ('Should get login token', async () => {
    const loginRequest = {
        userName:"vredenburgben@gmail.com",
        password:"N7T5PpQz!",
    }

    const token = await login(loginRequest);
    console.log("Token "+ token)
})