// Requires
// Propios de node
// Paquetes externos
// const express = require('express')
// Archivos propios
// const file = require('./file')
const {argv} = require('./config/yargs')
const colors = require('colors/safe')

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando incorrecto')
}

// console.log(argv);
















// console.log(argv.base)
// console.log('Limite:' , argv.limite)

// let parametro = argv[2];
// let base = parametro.split('=')[1]