const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', opciones)
    .command('crear', 'Crea un archivo con la tabla', opciones)
    .help()
    .argv;

module.exports = {
    argv
}