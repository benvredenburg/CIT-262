import express from 'express';
import bodyParser from 'body-parser';

const application = express();

application.use(bodyParser.json());

application.get('/', (req, res) => {res.send('Hello')});

application.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    if (userName == 'vredenburgben@gmail.com' && password == 'N7T5PpQz!') {
        res.status(200);
        res.send({Status:'LoggedIn'});
    } else {
        res.staus(403);
        res.send({Status:'FailedLoggingIn'});
    }
});

application.listen(3000, () => {console.log("Listening...")});
