import fetch from 'node-fetch';

const login = async ({userName, password}) => {
    
    
    const options = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {
            'Content-Type':'application/json',
            'Accept':'text'
    }

}

const tokenResponse = await fetch('https://dev.stedi.me/login', options);
const token = await tokenResponse.text();

return token;

}

export {login};