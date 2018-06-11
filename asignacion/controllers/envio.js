const Envio = require('../models/envio');

function getEnvio(req, res) {

  	Envio.find().sort('estados').exec((err, envio)=>{
  		if(err){
  			res.status(500).send({message: 'Error en la petición'});
  		}else{
  			if(!envio){
  				res.status(404).send({message: 'No hay ningun envio'});
          console.log({envio});
  			}else{
  				res.status(200).send({envio});
  			}
  		}
  	})
}

function getEnvios(req, res) {
  var envioId = req.params.id;

  // console.log(req);
  	Envio.findById(envioId).exec((err, envio)=>{
  		if(err){
  			res.status(500).send({message: 'Error en la petición'});
  		}else{
  			if(!envio){
  				res.status(404).send({message: 'El envio no existe.'});
          console.log({envio});
  			}else{
  				res.status(200).send({envio});
  			}
  		}
  	})
}

function saveEnvio(req, res) {
    const uuidv4 = require('uuid/v4')
    var envio = new Envio();
    var params = req.body;
    envio.dimension.ancho = params.ancho
    envio.dimension.alto = params.alto
    envio.dimension.profundo = params.profundo
    envio.dimension.peso = params.peso

    envio.direccion.origen = params.origen
    envio.direccion.destino = params.destino

    envio.costos = params.costos
    envio.trackID = uuidv4()
    envio.estado_actual = 'Generado'
    envio.url_notificacion = params.url

    envio.save((err, envioGuardado) => {
        if(err){
            res.status(500).send({message:'Error en el servidor'})
        }else{
            if(!envioGuardado){
                res.status(404).send({message: 'No se guardo el envio'})
            }else {
                res.status(200).send({envio: envioGuardado})
            }
        }
    })
}

function updateEnvio (req, res) {
    var envioId = req.params.id;

    // console.log(envioId)
    var update = req.body
    // console.log(update)

    Envio.findByIdAndUpdate(envioId, update, (err, envioUpdated)=> {
        if(err){
            res.status(500).send({message: 'Error en el server'})
        }else {
            if (!envioUpdated) {
                res.status(404).send({message: 'No se actualizo el envio'})
            } else {
                res.status(200).send({envio: envioUpdated})
            }
        }
    })

}

module.exports = {
    getEnvio,
    getEnvios,
    saveEnvio,
    updateEnvio
}
