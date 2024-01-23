const Tarea = require('./tarea');

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

}

module.exports = Tareas;

