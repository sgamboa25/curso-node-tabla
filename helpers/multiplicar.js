const fs = require('fs'); //inicializamos nuestro file system
const colors = require('colors');

const crearArchivo = async(base = 5,listar = false,hasta = 10) => { //paso como argumento la base, en caso de que no envíe ninguna, el valor por defecto va a ser 5
    try{

        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta; i++){
            //salida += (base,colors.green('x'),i,colors.green(' = '), base*i,'\n');
            salida += (`${base} x ${i} = ${base * i}\n`); //\n me da el salto de linea 
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
        }
        
        if(listar){
            console.log('=================='.green);
            console.log('   Tabla del:'.blue, colors.blue(base));
            console.log('=================='.green);

            console.log(consola);
            }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla-${base}.txt`);
    }catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo //como es redundante crearArchivo: crearArchivo, porque la propiedad tiene el mismo nombre de la función, dejó solo crearArchivo
}