import fetch from 'node-fetch';

it ('Should Respond', async () => {
    const answer = await fetch ('http://34.168.221.70');
    console.log(answer);
})
