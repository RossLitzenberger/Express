var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);



app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);


// listening on port 3000
app.listen(3000, function(){
	console.log('Listening on port 3000');
});
