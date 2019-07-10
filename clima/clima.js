// http://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87.65
// eb60656e4a692a1c89de17788603bd05
const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=eb60656e4a692a1c89de17788603bd05`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}