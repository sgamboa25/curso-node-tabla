const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw ('la base tiene que ser un número')
                }
                return true;
             //   console.log('yargs',argv);
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'muestra la tabla en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'me dice hasta que número se extiende la tabla de multiplicar'
            })
            .check((argv,options)=>{
                if(isNaN(argv.h)){
                    throw ('el argumento "hasta" debe ser un número')
                }
                return true;
             //   console.log('yargs',argv);
            })
            .argv;


module.exports = argv;