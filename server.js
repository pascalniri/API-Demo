const express = require('express');;
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    console.log("Welcome to home route")

    res.send('Welcome to home route')
})


mongoose.connect('mongodb+srv://pascalniri:Iwasbornon15@cluster0.f71vg1u.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to mongodb server')
    
    app.listen(3000, () => {
        console.log('Port is running at http://localhost:3000')
    })
    
}).catch((error) => {
    console.log(error);
})