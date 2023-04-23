const Persona = require("./personaMongo.js");

exports.iniciarSesion = function (req, res) {
    Persona.findOne({
        correo: req.body.correo,
        contrasena: req.body.contrasena
    }).then(function (persona) {
        res.json(persona);
    });
};

exports.registrarse = function (req, res) {
    Persona.create(req.body)
      .then(function () {
        res.json({});
      })
};
