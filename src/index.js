const express = require("express");
var app = express();
var fs = require("fs")
var path = require("path")

app.get('/observaciones', function(req, res){
    console.log("[" + new Date() + "] GET: " + req.url);
    let data = fs.readFileSync("src/resources/observaciones.json");
    let json = JSON.parse(data);
    res.status(200);
    res.send(json);
});

app.get('/estaciones', function(req, res){
    console.log("[" + new Date() + "] GET: " + req.url);
    let data = fs.readFileSync("src/resources/stations.json");
    let json = JSON.parse(data);
    res.status(200);
    res.send(json);
});

var port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("JsonServer starting...");
  console.log("Listen in port " + port);
});