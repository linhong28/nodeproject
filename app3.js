const express = require('express')
const app = express()

app.get('/', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})


app.get('/hello', function (req, res) {
	res.send('hello world')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
	res.send(req.params.userId)
})

//array of callback functions
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example', [cb0, cb1, cb2])



app.listen(3000, () => console.log('Example app listening on port 3000!'))