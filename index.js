
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log('Connect to DB');
        // Creacion del servidor
        app.listen(port, () => {
            console.log('Run server')
        });
    })
    .catch(err =>  console.log(err));