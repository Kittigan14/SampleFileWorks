const express = require('express');
const axios = require('axios');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5500;

const base_url = "http://localhost:3000";

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/Login.html'));
});

app.get('/register', async (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/Register.html'));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})