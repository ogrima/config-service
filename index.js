var express = require("express");
const { json } = require("express/lib/response");
var app = express();
var serverPort = 80;

app.get("/configs", (req, res, next) => {
    const fs = require('fs');

    let rawdata = fs.readFileSync('configs.json');
    let configs = JSON.parse(rawdata);
   
    res.json(configs);
});


app.listen(serverPort, () => {
 console.log("Server running on port " + serverPort);
});
