let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let itemMongo = new Schema({
    modelo: String,
    talla: String,
    colorway: String,
    precio: Number,
    foto: String,
    comprado: Boolean
});

module.exports = mongoose.model("Sneaker", itemMongo);
