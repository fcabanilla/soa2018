// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var direccionSchema = new Schema({
	id_direccion: {type: Number, required: true, unique: true},
	codigo_envio: {type: Number, unique: true},
	origen: String,	
	destino: String
});

// the schema is useless so far
// we need to create a model using it
var Direccion = mongoose.model('direccion', direccionSchema);

// make this available to our users in our Node applications
module.exports = Direccion;
