
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de Rutas
var project_routes = require('./routes/project');

//middlewares()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS()

// rutas

app.use('/', project_routes);

// app.get('/', (req, res) =>{
//     res.status(200).send(
//         "Home Page"
//     );
// });


// app.post('/test/:id', (req, res) => {
//     console.log(req.params.id)
//     res.status(200).send({
//         message:'Hello NodeJS'
//     });
// });

// app.post('/testpost/:id', (req, res) => {
//     console.log(req.params.id);
// });

// exportar
module.exports = app;


