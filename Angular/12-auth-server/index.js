//Requier es lo mismos a import
const express = require('express');
const cors = require ('cors');
const { dbConnection } = require('./db/config');

//Anadimos las variables de entorno
require('dotenv').config();

//Crear el servidor/ap;icacion de express
const app = express();

//--BASE DE DATOS---//
dbConnection();

///----MIDLEWARES----///
    //--Directorio Publico--//
    app.use(express.static('public'));

    //---CORS---//
    app.use(cors());

    //---LECTURA Y PARSEO DEL BODY---//
    app.use(express.json());

//---RUTAS---//
//Le estamnos diciendo que siempre que alguien entre tendra el api/auth y se conectara a auth.js
app.use("/api/auth",require('./routes/auth'));

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corrriendo en puerto ${process.env.PORT}`);
});