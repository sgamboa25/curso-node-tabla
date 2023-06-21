// 5 x 1 = 5
// tarea

//Mi ejercicio
// for(let i=1; i<=10;i++){
//     resultado = 5 * i;
//     console.log(`5 x ${i} = ${resultado} `);
// }

//Otra forma

// import { writeFile } from 'node:fs';
// import { Buffer } from 'node:buffer';


const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// option('l')
// listar
// boolean
// default: false

console.clear();
// console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.base );


//console.log(process.argv);

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

//const base = 5;

crearArchivo(argv.b,argv.l,argv.h)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));

// fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//     if (err) throw err;
//     console.log(`tabla-${base}.txt creado`);
// }) 

//console.log(salida);