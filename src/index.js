const express = require('express');
const app = express(); 

// импортваме настройките на Еxpress от друг файл
const expressConfig = require('./config/expressConfig');
expressConfig(app);

// инпортваме настройките за Handlebars от друг файл
const handlebarsConfig = require('./config/handlebarsConfig');
handlebarsConfig(app);

const homeController = require('./controllers/homeController');
app.use(homeController);

const port = 5000;


app.listen(port, ()=> console.log(`The server is running on ${port} ...`));
