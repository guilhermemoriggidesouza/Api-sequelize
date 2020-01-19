var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());


app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-types");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})

consign().include("./models").then("./controller").then('./DAO').then('./api.js').into(app);

module.exports = app;