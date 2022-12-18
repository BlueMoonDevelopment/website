//server.js

const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Hello there!'})
});

const server = http.createServer(app);
const port = 8080;
server.listen(port);

console.log('Server running at http://127.0.0.1:8080');