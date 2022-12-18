const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"))

//default url for website
app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname resolves to project folder
});

const server = http.createServer(app);
const port = 8080;
server.listen(port);

console.log('Server running at http://127.0.0.1:8080');