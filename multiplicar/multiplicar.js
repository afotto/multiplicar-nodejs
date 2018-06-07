const fs = require('fs');


let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        let dato = '';

        // if (!number(base)) {
        //     reject(`La base ${ base } no es un número`);
        //     return;
        // }

        for (let i = 1; i <= 10; i++) {
            dato += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, dato, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });




}

module.exports = {
    crearArchivo,
    listarTabla
}