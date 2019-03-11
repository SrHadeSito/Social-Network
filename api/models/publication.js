'use strict'

// Cargar mongoose y esquema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicationSchema = Schema({
	text: String,
	file: String,
	created_at: String,
	// User hace referencia al id del usuario que se encuentra en el modelo user
	user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Publication', PublicationSchema);