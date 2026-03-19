
var express = require('express')
var http = require('http')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;

http.createServer(app).listen(port, '0.0.0.0', () => {
  console.log(`Server started at http://0.0.0.0:${port}`);
});

const apiRouter = require('./src/routes/Routes.js');

app.use(apiRouter);
