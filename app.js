const colors = require('colors');

const Tareas = require('./models/tareas');
const { inquirerMenu, pausa, leerInput, menuBorrador, mostrarChecklist, confirm } = require('./helpers/inquirer');
const { persistencia, leerPersistencia } = require('./helpers/saveFile');

console.clear();

const main = async () =>{

    let opc = '';
    const tareas = new Tareas();
    const leerDB = leerPersistencia() ;

    if(leerDB){
        tareas.cargarTarea(leerDB);
    }
    
    do {

        opc = await inquirerMenu();

        switch(opc){

            case '1': const desc = await leerInput('Descripción de tarea: '); tareas.crearTarea(desc); break;
            case '2': tareas.mostrarTareas(leerDB); break;
            case '3': tareas.mostrarCompletasPendientes(true); break;
            case '4': tareas.mostrarCompletasPendientes(false); break;
            case '5': 
                const ids = await mostrarChecklist(tareas.listadoArr); 
                tareas.completarTarea(ids);
            break;
            case '6': 
                const id = await menuBorrador(tareas.listadoArr); 
                if(id !== '0'){
                    const borrar = await confirm(); 
                    if (borrar){
                        tareas.borrarTarea(id);
                        console.log(`La tarea se borro exitosamente`.green);
                    } else {
                        console.log(`La tarea no fue eliminada`.red);
                    }
                } 
                // console.log({borrar});
            break;

        }

        persistencia(tareas.listadoArr);

        await pausa();

    } while (opc !== '0')


}

main();