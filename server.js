//server.js

/**
 * Required external modules
 */
const express = require('express');
const path = require('path');

/**
 * App Variables
 */
const app = express();
const port = 8080;
app.use(express.json());

/**
 * App Configuration
 */
app.set('views', './views');
app.set('view engine', 'pug');

/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Hello there!'})
});

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests at 127.0.0.1:${port}`);
});