const Afip = require('@afipsdk/afip.js');
const { Console } = require('console');
const afip = new Afip({ CUIT: 30715270079 });

const crearFactura = require('./src/service/facturaService');

var express = require('express')
var http = require('http')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});

const apiRouter = require('./src/routes/Routes.js');

app.use(apiRouter);