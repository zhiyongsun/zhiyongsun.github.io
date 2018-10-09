const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const rp = require('request-promise')
const fs = require('fs')

const app = express()
const port = 3000

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})

// const users = []

'use strict'

const pg = require('pg')
const conString = 'postgres://postgres:szy785037@localhost/node_hero' // make sure to match your own database's credentials

pg.connect(conString, function (err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err)
    }
    client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
        done()

        if (err) {
            return console.error('error happened during query', err)
        }
        console.log(result.rows[0])
        // process.exit(0)
    })
})

app.post('/users', function (req, res, next) {
    const user = req.body

    pg.connect(conString, function (err, client, done) {
        if (err) {
            // pass the error to the express error handler
            return next(err)
        }
        client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age], function (err, result) {
            done() //this done callback signals the pg driver that the connection can be closed or returned to the connection pool

            if (err) {
                // pass the error to the express error handler
                return next(err)
            }

            res.send(200)
        })
    })
})

app.get('/users', function (req, res, next) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            // pass the error to the express error handler
            return next(err)
        }
        client.query('SELECT name, age FROM users;', [], function (err, result) {
            done()

            if (err) {
                // pass the error to the express error handler
                return next(err)
            }

            res.json(result.rows)
        })
    })
})

app.get('/:city', (req, res) => {
    rp({
        uri: 'http://apidev.accuweather.com/locations/v1/search',
        qs: {
            q: req.params.city,
            apiKey: 'A%2Fp2QJ4R%2FD3FFCr6XwUCyNP56Y0%3D'
            // Use your accuweather API key here
        },
        json: true
    })
        .then((data) => {
            res.render('index', data)
        })
        .catch((err) => {
            console.log(err)
            res.render('error')
        })
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on http://localhost:${port}/`)
})

