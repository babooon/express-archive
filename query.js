var express = require('express');
var http = require('http');
var app = express();

app.get('/search', function(req, res){
    //console.log(req.query);
    //res.send(JSON.stringify(req));
    res.send(req.query);
});
 
app.listen(process.argv[2]);