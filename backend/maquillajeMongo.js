let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let itemMongo = new Schema({
    nombre: String,
    precio: Number,
    categoria: String,
    descripcion: String, 
    foto: String,
    comprado: Boolean
});

module.exports = mongoose.model("Maquillaje", itemMongo);
