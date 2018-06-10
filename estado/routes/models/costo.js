// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var costoSchema = new Schema({
	id_costo: {type: Number, required: true, unique: true},
	origen: String,
	destino: String,
	costo: Number
});

// the schema is useless so far
// we need to create a model using it
var Costo = mongoose.model('costo', costoSchema);

// make this available to our users in our Node applications
module.exports = Costo;
