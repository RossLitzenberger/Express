var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

var blocks = { };

// var blocksRoute = app.route('/blocks')
// short hand 

app.route('/blocks')
	// create a block
	.post( parseUrlencoded, function(request, response){
		var newBlock = request.body;
		blocks[newBlock] = newBlock.description;

		response.status(201).json(newBlock.name);
	});

	// delete the block
app.route('/blocks/:name')
	.delete(function(request, response){
		delete blocks[request.blockName];
		response.sendStatus(200);
	});

// listening on port 3000
app.listen(3000, function(){
	console.log('Listening on port 3000');
});
