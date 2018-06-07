const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
//let base = 2;
//console.log(argv.base);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo ${ archivo } creado`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}