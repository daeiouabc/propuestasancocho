var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Servidor Corriendo en http://%s:%s', host, port);

});
