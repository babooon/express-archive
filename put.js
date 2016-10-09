var express = require('express');
var http = require('http');
var app = express();

app.put('/message/:id', function(req, res){
    //console.log(req.params.id);
    res.end( require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
});
 
app.listen(process.argv[2]);