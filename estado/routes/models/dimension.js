// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dimensionSchema = new Schema({
	id_dimension: {type: Number, required: true, unique: true},
	codigo_envio: {type: Number, unique: true},
	volumen: Number,
	alto: Number,
	ancho: Number,
	profundidad: Number,
	peso: Number,
});

// the schema is useless so far
// we need to create a model using it
var Dimension = mongoose.model('dimension', dimensionSchema);

// make this available to our users in our Node applications
module.exports = Dimension;
