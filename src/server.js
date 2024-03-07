import express from 'express';
import configViewEngine from './config/viewEngine';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connect from './config/connectDB';
require('dotenv').config()

const app = express();
configViewEngine(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
connect();
let port = process.env.PORT || 8081;
app.get('/', (req, res) => res.send('home'));
app.listen(port, () => console.log('Example app is listening on port '+port+'!'));