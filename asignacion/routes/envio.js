var express = require('express')
const EnvioController = require('../controllers/envio')
var api = express.Router()

api.get('/envio', EnvioController.getEnvio)
api.get('/envio/:id', EnvioController.getEnvios)
api.post('/envio', EnvioController.saveEnvio)
api.put('/envio/:id', EnvioController.updateEnvio)

module.exports = api
