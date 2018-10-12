require('dotenv').config()

const express= require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const controller = require('./controller');
const session = require('express-session');





const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;



const app = express();

app.use(bodyParser.json())


massive(process.env.CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('connected to the db')
})
.catch((err) => {
    console.log(err)
})

//endpoints
app.post('/api/auth/register', controller.create);
app.post('/api/auth/login', controller.login)









app.listen(SERVER_PORT, () => {
    console.log(`Ahoy mat-ee on port: ${SERVER_PORT}`);
})