const mongoose = require('mongoose');

var EnvioSchema = mongoose.Schema({
  dimension: {
    ancho: Number,
    alto: Number,
    profundo: Number,
    peso: Number,
    volumen: Number
  },
  direccion: {
    origen: String,
    destino: String,
  },
  costos: Number,
  trackID: String,
  estado_actual: String,
  url_notificacion: String,
  estados: [{
    estado: String,
    fecha: Date
  }]
});

module.exports = mongoose.model('Envio', EnvioSchema)
