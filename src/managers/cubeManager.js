
// библиотека за генериране на уникални ид
const uniqid = require('uniqid');

const cubes = [];

exports.getAll = () => cubes.slice()

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }

    cubes.push(newCube);

    return newCube
};