require('dotenv').config();
const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const port = 3000;

app.use('/api/weather', weatherRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
