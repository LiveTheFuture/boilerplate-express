const { static } = require('express');
var express = require('express');
var app = express();

const absolutePath = __dirname + '/views/index.html';

//app.use('/public', express.static(__dirname + '/public'));

app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE === uppercase){
        res.json({
            "message" : "HELLO JSON"
        })
    } else {
        res.json({
            "message": "Hello json"
        })
    }
    
});






































 module.exports = app;
