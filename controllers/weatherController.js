const weatherService = require('../services/weatherService');

exports.getWeather = async (req, res) => {
    try {
        const city = req.query.city;
        if (!city) {
            return res.status(400).json({ message: "City is required" });
        }

        const weatherData = await weatherService.fetchWeather(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
