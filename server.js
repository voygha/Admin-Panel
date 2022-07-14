// load the things we need
const bodyparser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");
var express = require('express');
const path = require('path')
var app = express();

import morgan from "morgan";



// set the view engine to ejs

// View Engine Setup
app.set('views', path.join(__dirname, '/src/views/'));


app.set('view engine', 'ejs');

app.use(morgan("dev"));
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// use res.render to load up an ejs view file

app.use(express.static(__dirname + '/public/assets/img'))
app.use(express.static(__dirname + '/public/assets/css'))
app.use(express.static(__dirname + '/public/assets/js'))

//app.use(express.static(__dirname + '/views/pages/inicio'))

// load routers

app.use('/', require('./src/router/router'));
app.use('/usuarios', require('./src/router/Usuarios'));
//app.use('/sidebar', require('./src/router/sidebar'));

app.listen(8080);
console.log('8080 is the magic port');