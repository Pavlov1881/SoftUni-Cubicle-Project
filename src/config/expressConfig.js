const path = require('path');
const express = require('express');


function expressConfig(app) {

    app.use(express.static(path.resolve(__dirname, '../public'))); // добаване на MIDDLEWARE -> използвай директорията 'public' за всички статични файлове

    // държавен Bodyparcer - ако имаме изпратени данни чрез ПОСТ заявка от form, парсъра ги парсва в обикновен обекект, който можем да достъпим с req.body
    app.use(express.urlencoded({ extended: false }))
}

module.exports = expressConfig;