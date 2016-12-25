var app = require('express')();
var http = require('http').createServer(app);
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
var port = process.env.PORT || 8082;
http.listen(port, function() {
    console.log('The sever listening at ${port} !');
})