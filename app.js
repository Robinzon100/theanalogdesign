const express = require('express');
const app = express()
const bodyParser = require("body-parser")
const nodemon = require("nodemon")
const path = require('path');

// app.use(nodemon())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", (req, res, next) =>{

    res.sendFile(path.join(__dirname+'/index.html'));
})

let post = process.env.PORT || 3000

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});