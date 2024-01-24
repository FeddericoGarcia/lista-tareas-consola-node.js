const Tarea = require('./tarea');
require('colors');
class Tareas{

    listado = {};
    
    get listadoArr() {
        const list = [];
        Object.keys(this.listado).forEach(key => {
            const tarea = this.listado[key]
            list.push(tarea);
        });

        return list;
    }

    constructor(){
        this.listado = {};
    }

    crearTarea(desc){
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    }

    cargarTarea(database = []){
        database.forEach( tarea => {
            this.listado[tarea.id] = tarea;
        })

    };

    mostrarTareas(){ 
        console.log();
        this.listadoArr.forEach( (tarea, i) => {
            const index = i + 1;
            const { desc, completado } = tarea;   
            const status = completado ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${index.toString().blue} - ${ desc } :: ${ status }`);
        });
    }

    mostrarCompletasPendientes(completa = true){
        console.log();
        let index = 0;
        this.listadoArr.forEach( (tarea, i) => {
            const { desc, completado } = tarea;   
            const status = completado ? 'Completada'.green : 'Pendiente'.red;
            if (completa){
                if(completado){
                    index += 1;
                    console.log(`${index.toString().blue} - ${ desc } :: ${ status }`);
                }
            } else {
                if(!completado){
                    index += 1;
                    console.log(`${index.toString().blue} - ${ desc } :: ${ status }`);
                }
            }
        });
    }
    
    completarTarea(){
        
    }

    borrarTarea(id){
        if (this.listado[id]){
            delete this.listado[id];
        }
        
    }

};

module.exports = Tareas;

