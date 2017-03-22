var app = require('express')();
var http = require('http').createServer(app);
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/checkapi', function(req, res) {

    req.send("You are too dumb !!! ");
})
var port = process.env.PORT || 8082;
http.listen(port, function() {
    console.log('The sever listening at ${port} !');
})