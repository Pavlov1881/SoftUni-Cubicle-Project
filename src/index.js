const express = require('express');

const mongoose = require('mongoose');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');
const dbConnect = require('./config/dbConfig');

const app = express();

const PORT = 5000;

dbConnect()
    .then(() => console.log('DB connected successfuly'))
    .catch(err => {
        console.log('DB error: ', err)
    });

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
