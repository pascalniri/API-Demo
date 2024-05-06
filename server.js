const express = require('express');;
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel')

app.use(express.json());

app.get('/', (req, res) => {
    console.log("Welcome to home route")

    res.send('Welcome to home route')
})

// creating the route for posting products

app.post('/products', async(req, res) => {
    
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});





















mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://pascalniri:Iwasbornon15@cluster0.f71vg1u.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to mongodb server')

    app.listen(3000, () => {
        console.log('Port is running at http://localhost:3000')
    })
    
}).catch((error) => {
    console.log(error);
})