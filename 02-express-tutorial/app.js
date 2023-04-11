const express = require('express')
const app = express()

//req => middleware => res
const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req, res) => {
    res.send('Items')
})

app.listen(8088, () => {
    console.log('server is listening on port 8088...');
})