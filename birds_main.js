const express = require('express')
const app = express()

var birds = require('./birds')

app.use('/birds', birds)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

