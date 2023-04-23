let Item = require("./sneakerMongo.js"); 

exports.guardar = function (req, res) {  
    Item.create({
        ...req.body,
        comprado: false    
    });
    res.json({});
};

exports.mostrar = function (req, res) {
    Item.find()
        .then((datos) => res.json(datos));
};

exports.comprar = async function (req, res) {
    await Item.updateOne({
        _id: req.body.id
    },
    {
        $set: {
            comprado: true
        }
    });
    res.json({});
};

exports.eliminar = async function (req, res) {
    await Item.deleteOne({ _id: req.body.id });
    res.json({});
};
