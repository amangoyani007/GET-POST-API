const express = require('express');
const mongoose = require('mongoose');
const Product = require('./productModel');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello api');
})

app.post('/2', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb://127.0.0.1:27017')
.then(()=>{
    console.log("connect in mongo");
}).catch((error) => {
    console.log(error);
})

app.listen(5000);
