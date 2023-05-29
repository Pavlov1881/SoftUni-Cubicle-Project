const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 5000;

// Express config
app.use(express.static(path.resolve(__dirname, 'public'))); // добаване на MIDDLEWARE -> използвай директорията 'public' за всички статични файлове

// handlebars confing
app.engine('hbs', handlebars.engine({
extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views'); // допълнителна настройка, за да може express-handlebars да намери папката

// routes
app.get('/', (req, res) => {
   res.render('index');
});

app.listen(port, ()=> console.log(`The server is running on ${port} ...`));
