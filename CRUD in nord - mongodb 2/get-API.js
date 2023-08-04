const connection = require('./config');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await connection();
    data = await data.find().toArray();
    console.warn(data);
    res.send(data);
});

app.post('/', async (req, res) => {
    let data = await connection();
    let result = await data.insertOne(req.body);
    res.send(req.body);
});

app.listen(5000);
