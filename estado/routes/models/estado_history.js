// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var estadoHistorySchema = new Schema({
	codigo_tracking: {type: Number, required: true},
	estado:{type: String, unique:true},
	timestamp_estado: String
});

// the schema is useless so far
// we need to create a model using it
var Estado_History = mongoose.model('estado_history', estadoHistorySchema);

// make this available to our users in our Node applications
module.exports = Estado_History
