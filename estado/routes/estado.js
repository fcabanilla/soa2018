var express = require('express')
const EstadoController = require('../controllers/estado')
var api = express.Router()

api.get('/estado', EstadoController.getEstados)
api.get('/estado/:id', EstadoController.getEstado)
api.post('/estado', EstadoController.saveEstado)
api.put('/estado/:id', EstadoController.updateEstado)

module.exports = api
