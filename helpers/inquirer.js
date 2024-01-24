const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opciones',
        message: 'Seleccioná una opción'.blue,
        choices: [
            {
                value: '1',
                name: `${ '1'.blue } - Crear tarea`
            },
            {
                value: '2',
                name: `${ '2'.blue } - Mostrar tareas`,
            },
            {
                value: '3',
                name: `${ '3'.blue } - Mostrar tareas compleatadas`,
            },
            {
                value: '4',
                name: `${ '4'.blue } - Mostrar tareas pendientes`,
            },
            {
                value: '5',
                name: `${ '5'.blue } - Completar tarea/s`,
            },
            {
                value: '6',
                name:  `${ '6'.blue } - Borrar tarea/s`,
            },
            {
                value: '0',
                name:  `${ '0'.blue } - Salir\n`
            }
        ]
    }
]



const inquirerMenu = async() =>{

    console.clear();
    console.log('--------------------------'.blue);
    console.log('  LISTA TO-DO EN CONSOLA  '.grey);
    console.log('--------------------------\n'.blue);

    const { opciones } = await inquirer.prompt(questions);

    return opciones

}

const pausa = async () =>{

    const questions = [
        {
            type: 'input',
            name: 'respuesta',
            message: `Presiona ${'ENTER'.yellow} para continuar`,
        }
    ]

    const respuesta = await inquirer.prompt(questions);

    return respuesta

}

const leerInput = async(message) =>{

    const questions = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0){
                    return 'Por favor, ingresá una tarea'
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(questions);
    return desc;
}

const menuBorrador = async( tareas = []) => {

    const choices = tareas.map( (tarea, i) =>{
        const indx = (i + 1).toString().blue;
        return {
                value: tarea.id,
                name: `${ indx } - ${ tarea.desc }`
            }
    });

    choices.unshift({
        value: '0',
        name: `${'0'.blue} - Cancelar`
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: "Borrar tarea",
            choices
        }
    ];

    const { id } = await inquirer.prompt(questions);
    return id;
    
}

const mostrarChecklist = async( tareas = []) => {

    const choices = tareas.map( (tarea, i) =>{
        const indx = (i + 1).toString().blue;
        return {
                value: tarea.id,
                name: `${ indx } - ${ tarea.desc }`,
                checked: ( tarea.completado ) ? true : false
            }
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: "Seleccione la tarea",
            choices
        }
    ];

    const { ids } = await inquirer.prompt(question);
    return ids;
    
}

const confirm = async() => {

    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message: `¿Deseas ${ 'ELIMINAR'.red } la tarea?.`,
            
        }
    ];

    const { ok } = await inquirer.prompt(questions);
    return ok;
}

module.exports = {
    inquirerMenu, 
    pausa, 
    leerInput, 
    menuBorrador,
    mostrarChecklist,
    confirm
}



