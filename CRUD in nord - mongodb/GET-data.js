const express = require('express');
const dbconnect = require('./index');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});

app.post('/', async (req, res)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    res.send(req.body);

})

app.listen(3000);
