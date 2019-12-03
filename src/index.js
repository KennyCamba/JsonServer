const express = require("express");
var app = express();
var fs = require("fs");
var cors = require('cors');

app.use(cors())

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});*/

app.get('/observaciones', function(req, res){
    console.log("[" + new Date() + "] GET: " + req.url);
    let data = fs.readFileSync("resources/observaciones.json");
    let json = JSON.parse(data);
    res.status(200);
    res.send(json);
});

app.get('/estaciones', function(req, res){
    console.log("[" + new Date() + "] GET: " + req.url);
    let data = fs.readFileSync("resources/stations.json");
    let json = JSON.parse(data);
    res.status(200);
    res.send(json);
});

app.get('/estaciones/imgs', function(req, res){
    console.log("[" + new Date() + "] GET: " + req.url);
    var img = req.query["name"];
    res.status(200);
    res.sendFile("resources/imgs/" + img);
});

var port = process.env.PORT || 3001

app.listen(port, () => {
  console.log("JsonServer starting...");
  console.log("Listen in port " + port);
});

