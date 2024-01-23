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
    console.log('MENU DE TAREAS EN CONSOLA'.blue);
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

    const resp = await inquirer.prompt(questions);

    return resp

}

const leerInput = async(message) =>{

    const questions = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0){
                    return 'Por favor, ingresar un valor correcto'
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(questions);
    return desc;
}

module.exports = {
    inquirerMenu, pausa, leerInput
}



