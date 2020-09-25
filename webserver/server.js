const http = require('http');
const express = require('express');

const app = express();
const port = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
        res.sendFile('../index.html');
    });

app.post('/submit-data', (req, res) => {
        res.send('POST Request');
    });
    
app.put('/update-data', (req, res) => {
        res.send('PUT Request');
    });
    
app.delete('/delete-data', (req, res) => {
        res.send('DELETE Request');
    });

const server = app.listen(port, () => {
        console.log(`Node server is running on port ${port}`);
    });
