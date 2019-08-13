const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
	console.log('GET /')
	res.send('Hello World')
})

app.get('/user', (req, res) => {
	console.log('GET /user')
	res.json({ username: 'John', pw: 'test1234' })
})

module.exports = app