var express = require('express');

var buffer =  new Buffer(20);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  	buffer = fs.readFileSync(index.html);

	response.send(buffer.toString("buffer"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
