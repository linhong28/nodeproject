const express = require('express')
const app = express()

const port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
	res.send('Aloha World!');
})

app.get('/routing', function(req, res) {
	res.send('Aloha Routing!');
})

app.listen(port, function(err) {
	console.log('Server running at port: ' + port);
});