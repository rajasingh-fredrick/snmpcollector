var qs = require('querystring');
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8089))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/index', function(request, response) {
  response.send('Hello World Rajasingh!')
})

app.get('/device', function(request, response) {
	
	if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            response.send(post['username']);
            // use post['blah'], etc.
        });
    }
	else {
		var queryData = url.parse(request.url, true).query;
		
		console.log(queryData + req.query.username);
		  response.writeHead(200, {"Content-Type": "text/plain"});

		  if (queryData.username) {
		    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
		    response.send('Hello ' + queryData.username + '\n');

		  } else {
		    response.send("Hello World\n");
		  }
	}
	
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
