
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de Rutas

//middlewares()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS()

// rutas
app.get('/', (req, res) =>{
    res.status(200).send(
        "Home Page"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message:'Hello NodeJS'
    });
});

// exportar
module.exports = app;


