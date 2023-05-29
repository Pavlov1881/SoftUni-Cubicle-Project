const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const port = 5000;

// handlebars confing
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views'); // допълнителна настройка, за да може express да намери папката

// routes
app.get('/', (req, res) => {
   res.render('index');
});

app.listen(port, ()=> console.log(`The server is running on ${port} ...`));
