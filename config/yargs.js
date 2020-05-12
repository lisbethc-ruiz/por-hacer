const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza como completada, una tarea que estaba por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}