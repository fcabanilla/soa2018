const mongoose = require('mongoose');

var EstadoSchema = mongoose.Schema({
    estado: String,
    fecha: Date
});

module.exports = mongoose.model('Estado', EstadoSchema)
