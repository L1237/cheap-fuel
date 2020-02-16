const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json('Nothing here to see');
});

app.get('/api/v1/gas_stops', (req, res) => {
    console.log(req.query);
    res.json([
        {
            name: 'Shell Apple',
            location: {
                latitude: parseFloat(req.query.latitude),
                longitude: parseFloat(req.query.longitude),
            }
        }
    ]);
});

app.listen(3000, (err) => {
    if(err) return console.error(err);
    console.log('Listening on port 3000');
});