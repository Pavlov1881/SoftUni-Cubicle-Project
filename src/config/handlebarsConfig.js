const handlebars = require('express-handlebars');
const path = require('path');

function handlebarsConfig(app) {

// handlebars confing
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views'); // допълнителна настройка, за да може express-handlebars да намери папката
}

module.exports = handlebarsConfig;


