const Estado = require('../models/estado');
const Envio = require('../models/envio');

function getEstado(req, res) {

  	Envio.find().sort('fecha').exec((err, envio)=>{
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

function getEstados(req, res) {
    var estadoId = req.params.id;
    var now = new Date(year, month, day, hour, minute, second)
    console.log(now);
  	Envio.findById(estadoId).exec((err, envio)=>{
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

function saveEstado(req, res) {
    const uuidv4 = require('uuid/v4')

    estado.save((err, estadoGuardado) => {
        if(err){
            res.status(500).send({message:'Error en el servidor'})
        }else{
            if(!estadoGuardado){
                res.status(404).send({message: 'No se guardo el estado'})
            }else {
                res.status(200).send({estado: estadoGuardado})
            }
        }
    })
}

function updateEstado (req, res) {
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
    getEstado,
    getEstados,
    saveEstado,
    updateEstado
}
