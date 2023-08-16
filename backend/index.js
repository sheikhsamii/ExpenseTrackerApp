const express = require('express');
const cors = require('cors');
const {db} = require('./db/db')
const {readdirSync} = require('fs')
require('dotenv').config();
const app = express();

//Establish the PORT environment variable
const PORT = process.env.PORT || 3000

//Establish middlewares
app.use(express.json());
app.use(cors());


//Routes

readdirSync('./routes').map((route)=>app.use('/api/v1', require('./routes/' + route)))

//Establish the server
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    });
}
server()