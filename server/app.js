const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(express.static('./client/public/'));

app.use( '/api/jobs', require('./routes/generic.js'));

app.use(require('./middleware/page-not-found.middleware.js'));

app.use( require('./middleware/error-Handler.middleware.js') );

app.listen(3000, function ServerIsUp() {
    console.log('The server is up!');
});
