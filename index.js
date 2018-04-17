var http = require('http');

http.createServer(function (req, res) {
	
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write("{ 'name': 'Rajasingh' }");
    res.end('Hello World!');
}).listen(8080); 