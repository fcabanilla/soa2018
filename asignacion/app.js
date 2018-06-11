var express = require('express');
const bodyParser = require('body-parser');

var app = express();

const envio_routes = require('./routes/envio');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CONFIGURACION DE CABECERAS HTTP

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// RUTAS BASES

app.use('/api', envio_routes)

module.exports = app
