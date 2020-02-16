const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json('Nothing here to see');
});

const gasStops = [{
    title: "Shell",
    description: "Tankstelle",
    latlng: {
        latitude: Math.random() * 49,
        longitude: Math.random() * 13,
    },
}];

app.get('/api/v1/gas_stops', (req, res) => {
    res.json(gasStops);
});

app.post('/api/v1/gas_stops', (req, res) => {
    res.json('Added a new gasstop');
});

app.listen(3000, (err) => {
    if(err) return console.error(err);
    console.log('Listening on port 3000');
});