const fs = require('fs');
require('colors');

const pathFile = './database/data.json';

const persistencia = (data) =>{

    fs.writeFileSync(pathFile, JSON.stringify(data));
}

const leerPersistencia = () =>{

    if (!fs.existsSync(pathFile)){
        return null;
    }

    const info = fs.readFileSync(pathFile, 'utf-8');
    const data = JSON.parse(info);

    console.log(data)
    return data;

}

module.exports = {
    persistencia,
    leerPersistencia
};
