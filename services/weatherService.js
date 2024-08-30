const axios = require('axios');

exports.fetchWeather = async (city) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`OpenWeather API responded with status ${error.response.status}: ${error.response.data.message}`);
    }
};
