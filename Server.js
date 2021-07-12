
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