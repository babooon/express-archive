var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res){
    
    fs.readFile(process.argv[3], function(err, data){
        if (err != null)
            res.send(JSON.parse("ERROR:" + err));
        else
            res.send(JSON.parse(data));
    });
    
});

app.listen(process.argv[2]);