let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let personaMongo = new Schema({
    correo: String,
    contrasena: String
});

module.exports = mongoose.model("Persona", personaMongo);