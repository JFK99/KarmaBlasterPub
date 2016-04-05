var express = require('express');
var reddit = require('simpleredditwrapper');
var app = express();

// Your Reddit Account
var user = '',
pass = 'f';

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, response) {
	reddit.login(user, pass, function() {
		console.log("> Logged as ", user);
		reddit.postLink(req,function(res){
			response.sendStatus(res);
		});
	});
	//response.render('pages/index');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
