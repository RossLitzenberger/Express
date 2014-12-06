var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });


var blocks = { };

// var blocksRoute = app.route('/blocks')
// short hand 
router.route('/')
	// create a block
	.post( parseUrlencoded, function(request, response){
		var newBlock = request.body;
		blocks[newBlock] = newBlock.description;

		response.status(201).json(newBlock.name);
	});

	// delete the block
router.route('/:name')
	.all(function(request, repsonse, next){
		var name = request.params.name;
		var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
		request.blockName = block;
		next();
	})
	.delete(function(request, response){
		delete blocks[request.blockName];
		response.sendStatus(200);
	});
module.exports = router;