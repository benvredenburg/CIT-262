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

console.log(options.method);

const tokenResponse = await fetch('http://localhost:3000/login', options);
const token = await tokenResponse.text();

return token;

}

export {login};