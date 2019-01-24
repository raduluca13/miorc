const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../')));

app.post('/', function (req, res) {
    console.log(req.body);
    console.log(res)
})

app.listen(8000);

console.log('Running at Port 8000');