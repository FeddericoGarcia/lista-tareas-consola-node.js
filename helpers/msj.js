const colors = require('colors');

const mostrarMenu = () =>{

    return new Promise(resolve => {

        console.clear();
        console.log('----------------------'.blue);
        console.log('Seleccionar una opción'.blue);
        console.log('----------------------\n'.blue);
            
        console.log(`${ '1'.blue } - Crear tarea`);
        console.log(`${ '2'.blue } - Mostrar tareas`);
        console.log(`${ '3'.blue } - Mostrar tareas compleatadas`);
        console.log(`${ '4'.blue } - Mostrar tareas pendientes`);
        console.log(`${ '5'.blue } - Completar tarea/s`);
        console.log(`${ '6'.blue } - Borrar tarea/s`);
        console.log(`${ '0'.blue } - Salir\n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
    
        readLine.question('Seleccioná una opción: ', (opt) =>{
            readLine.close();
            resolve(opt);
        })

    });
}

const pausa = () =>{

    return new Promise( resolve => {
        const readLine = require('readline').createInterface({
        input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`Presiona ${'ENTER'.yellow} para continuar`, (opt) =>{
            readLine.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu, pausa
}