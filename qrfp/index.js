var http = require('http');
var fs = require('fs');
var mime = require('mime');


http.createServer(function (req, res) {
	var path = '../fichiers';
	var filePath = path + req.url;

	if (fileExists(filePath)) {
		var type = mime.lookup(filePath);
		var file = fs.readFileSync(filePath);

	  res.writeHead(200, {'Content-Type': mime});
	  res.end(file);
	} else {
		res.writeHead(404);
	  res.end(file);
	}

}).listen(9615);

function fileExists(filePath)
{
    try {
        return fs.statSync(filePath).isFile();
    }
    catch (err) {
        return false;
    }
}