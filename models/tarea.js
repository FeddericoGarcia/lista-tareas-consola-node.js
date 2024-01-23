const {v4: uuid} = require('uuid');

class Tarea{
    id = '';
    desc = '';
    completado = null;

    constructor( desc ){

        this.id = uuid();
        this.desc = desc;
        this.completado = null;

    }

}

module.exports = Tarea;