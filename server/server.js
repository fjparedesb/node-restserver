require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    //const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {
    res.json('get Usuario!')
})

app.post('/usuario', (req, res) => {

    let body = req.body;

    res.json({ persona: body })
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({ id });
})

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})