import express from 'express';

import dotenv from 'dotenv';

import connection from './databases/db.js';

import Routes from './routes/route.js'


const app = express();

dotenv.config();
app.use('/',Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


connection(username,password);

app.listen(PORT,() => console.log(`Server is succesfully running on PORT ${PORT}`));