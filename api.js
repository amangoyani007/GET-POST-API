const express = require('express');
const dbconnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/a', async (req, resp) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data)
});

app.post('/', async (req,resp)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body)
    resp.send(req.body)
})

app.listen(5000)
