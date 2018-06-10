// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var envioSchema = new Schema({
  codigo_envio: {type: Number, required: true, unique: true},
});

// the schema is useless so far
// we need to create a model using it
var Envio = mongoose.model('envio', envioSchema);

// make this available to our users in our Node applications
module.exports = Envio;
