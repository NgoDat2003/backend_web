import express from 'express';
import configViewEngine from '../config/viewEngine';

const app = express();
configViewEngine(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.listen(3000, () => console.log('Example app is listening on port 3000.'));