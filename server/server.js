const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello Lee Cash it\'s good this works');
}).listen(port, () => {
    console.log('server has started runing on port 5000');
});