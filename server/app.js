

const express = require('express');

let app = express();

app.get('/', function showHome(req, res, next) {
    console.log(request.url);

    response.status(200);
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello World</h1>');
});

app.listen(3000, function ServerIsUp() {
    console.log('The server is up!');
});
