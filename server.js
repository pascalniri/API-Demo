const express = require('express');;
const app = express();


app.get('/', (req, res) => {
    console.log("Welcome to home route")

    res.send('Welcome to home route')
})

app.listen(3000, (req, res) => {
    console.log('Port is running at http://localhost:3000')
})