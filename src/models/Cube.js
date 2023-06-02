const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: String,
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;