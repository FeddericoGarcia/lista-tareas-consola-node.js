const colors = require('colors');

const Tareas = require('./models/tareas');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const { persistencia, leerPersistencia } = require('./helpers/saveFile');

console.clear();

const main = async () =>{

    let opc = '';
    const tareas = new Tareas();
    const leerDB = leerPersistencia() ;

    if(leerDB){

    }

    await pausa();
    
    do {

        opc = await inquirerMenu();
        // console.log({opc});
        switch(opc){
            case '1': const desc = await leerInput('Descripción de tarea: '); tareas.crearTarea(desc); break;
            case '2': console.log(tareas.listadoArr); break;
            // case '3': console.log(tareas.listadoArr); break;
            // case '4': console.log(tareas.listadoArr); break;
            // case '5': console.log(tareas.listadoArr); break;
            // case '6': console.log(tareas.listadoArr); break;

        }

        // persistencia(tareas.listadoArr);

        await pausa();

    } while (opc !== '0')


}

main();