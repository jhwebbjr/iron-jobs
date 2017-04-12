const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(express.static('./client/public/'));
app.use( '/api/jobs', require('./routes/generic.js'));


// app.get('/', function showHome(req, res, next) {
//     console.log(req.url);
//
//     res.status(200);
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World</h1>');
// });



app.listen(3000, function ServerIsUp() {
    console.log('The server is up!');
});
