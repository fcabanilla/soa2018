var express = require('express');
var router = express.Router();
var database= 'mongodb://localhost:27017/segparcialdb';
var mongoose = require('mongoose');
var envio_m = require('./models/envio');
var estado_h_m = require('./models/estado_history');
var estado_m = require('./models/estado');

//actualizar el último estado al envio, y agrego un estado al estado_history
router.put('/:codenv', function(req, res) {
		mongoose.connect(database).then(
		  ()=>{console.log("connected")},
		  err =>{console.log("err",err);}
		)
	
		var e=req.body.estado;
		var tmp=req.body.timestamp_estado; 
	 	var codt=req.body.codigo_tracking;
		var codenvparam=req.params.codenv;

		var nEnvio = new envio_m({
				codigo_envio: codenvparam,
				estado: new estado_m({
					codigo_tracking: codt,
					estado: e,
					timestamp_estado: tmp	
				})
		});

		nEnvio.findOneAndUpdate( {cod_envio: codenvparam}, { envio: nEnvio }, function(err, resp) {
			if (err) throw err;
			console.log(resp);
			//resp.send(resp);
		});

		var newEstado2 = new estado_h_m({
				codigo_tracking: codt,
				estado: e,
				timestamp_estado: tmp	
		});

		newEstado2.save(function(err, res) {
			if (err) throw err;
			console.log(res);		
		});
		res.sendStatus(201);	
});

//obtener el historico de estados del código de tracking actual
router.get('/:c', function(req, res, next) {
	mongoose.connect(database).then(
		  ()=>{console.log("connected")},
		  err =>{console.log("err",err);}
	)
	
	estado_m.find( {codigo_tracking: req.params.c }, function(err, estado) {
		if (err) throw err;
		console.log(estado);
		res.send(estado);
	});
	res.sendStatus(200);
});

module.exports = router;
