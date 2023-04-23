let express = require('express');
let mongoose = require("mongoose");
let bodyParser = require('body-parser');
let cors = require('cors');

let port = 8080;
let mongoAtlasUri = 'mongodb+srv://gabriel:gabriel@cluster0.caz4i3r.mongodb.net/?retryWrites=true&w=majority';
let app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
require('./routes.js')(app);

mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbConnection = mongoose.connection;
dbConnection.on("error", function (error) {
    console.log(error)
});
dbConnection.once("open", function () {
    console.log("Conectado")
});

app.listen(port);
console.log(port);
