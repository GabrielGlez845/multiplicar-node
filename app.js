const argv = require('yargs').command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => {
                return console.log(`Archivo creado. ${archivo}`);
            })
            .catch(err => {
                return console.log(err);
            })
        break;

    default:
        console.log('Comando no reconocido')
}


//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];