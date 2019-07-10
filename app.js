const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     });

// clima.getClima(-25.299999, -57.630001)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(descripcion) => {

    const coords = await lugar.getLugarLatLng(descripcion);
    const temp = await clima.getClima(coords.lat, coords.lng);

    if (!temp) {
        throw new Error(`No se pudo determinar el clima de ${coords.direccion}`);
    }

    const mensaje = `El clima de ${coords.direccion} es de ${temp}`;

    return mensaje;

};

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));