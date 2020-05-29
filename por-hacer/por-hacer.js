'use strict';

const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardaDB();


    return porHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();

        return true;
    }

    return false;
}


const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardaDB();

        return true;
    }

    // let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    // if (nuevoListado.length != listadoPorHacer.length) {
    //     listadoPorHacer = nuevoListado;
    //     guardaDB();

    //     return true;
    // }

    return false;
}

module.exports = { crear, getListado, actualizar, borrar };