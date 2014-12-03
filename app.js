var express = require('express');
var app = express();

// app.get('/', function(request, response){
// 	response.sendFile(__dirname + '/public/index.html');
// });
// static middleware serving files form the public folder
app.use(express.static('public'));
app.get('/blocks', function(request, response){
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks);
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
