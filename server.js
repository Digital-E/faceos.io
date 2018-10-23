import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

import cloudinary from 'cloudinary';

import index from './routes/index';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.set('view engine', 'pug');

//Setting express sessions

app.use(session({
  secret: 'sytr456-65tyrd-12wrt',
  resave: true,
  saveUninitialized: true
}))


//Config cloudinary

cloudinary.config({
  cloud_name: 'dwup5whvt',
  api_key: '795575845446241',
  api_secret: 'ZA4ZFc2vlid32k68-uKh8Hq1fYU'
});


//routing

app.use('/', index);

app.listen(port, () => console.log(`http://localhost:${port}`))
