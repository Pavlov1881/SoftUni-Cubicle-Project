const express = require('express');
const app = express(); 

// импортваме настройките на Еxpress от друг файл
const expressConfig = require('./config/expressConfig');
expressConfig(app);

// инпортваме настройките за Handlebars от друг файл
const handlebarsConfig = require('./config/handlebarsConfig');
handlebarsConfig(app);


const port = 5000;




// routes
app.get('/', (req, res) => {
   res.render('index');
});

app.listen(port, ()=> console.log(`The server is running on ${port} ...`));
