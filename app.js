const axios = require('axios');

console.log('Application is now running');

// API specific settings.
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = '[REDACTED]';

const LOCATION_ZIP_CODE = '90001';
const COUNTRY_CODE = 'us';

const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;

axios.get(ENTIRE_API_URL)
    .then(res => {
        // Getting the current temperature and the city from the response object.
        const kelvinTemperature = res.data.main.temp;
        const cityName = res.data.name;

        // Making K to F and K to C conversions.
        const farenheitTemperature = (kelvinTemperature * 9/5) - 459.67;
        const celciusTemperature = kelvinTemperature - 273.15;

        // Building the final message.
        const message = (
            `Right now, in \
            ${cityName}, the current temperature is \
            ${farenheitTemperature.toFixed(2)} deg F or \
            ${celciusTemperature.toFixed(2)} deg C.`.replace(/\s+/g, ' ')
        );

        console.log(message);
    })
    .catch(err => console.log('err', err));