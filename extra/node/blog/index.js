/**
 *author zhiyong
 *date  06/11/2016
 */
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('hello Dom Sun')
});

app.listen(port,(err) =>{
    err && console.log(`something bad happend`, err)

    console.log(`server is listening on http://localhost:${port}/`)
})