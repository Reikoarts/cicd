const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/date', (req, res) => {
    res.send("current date: " + new Date().toDateString());
});


app.get('/mcdo', (req, res) => {
    res.send("Manger chez McDo c'est mal");
});

app.get('/fruits', (req, res) => {
    res.send("Manger chez des fruits c'est mal");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});