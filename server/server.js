require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
//const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Configuración global de rutas
app.use(require('./routes/index'));


//conexion a la bd
mongoose.connect(process.env.urlDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {

        if (err) throw err;

        console.log('BASE DE DATOS ONLINE');

    });

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});