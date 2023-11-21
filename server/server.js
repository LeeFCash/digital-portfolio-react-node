const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello Lee Cash');
}).listen(port, () => {
    console.log('server has started runing on port 5000');
});