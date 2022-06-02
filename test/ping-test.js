import fetch from 'node-fetch';
import assert from 'assert';

it ('Should Respond', async () => {
    const response = await fetch ('http://34.168.221.70');
    const text = await response.text();
    console.log("Token " + text);
    assert.equal(text, 'Hello');
})
