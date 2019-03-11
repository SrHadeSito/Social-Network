'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

// Conexión database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean-social', { useNewUrlParser: true })
		.then(() => {
			console.log("La conexion a la base de datos mean-social se ha realizado con exito");

			// Creación del servidor
			app.listen(port, () => {
				console.log("Servidor funcionando correctamente en la url: localhost:3800");
			});
		})
		.catch(err => console.log(err));