const express = require('express');
const path = require('path');

// http://expressjs.com/en/4x/api.html
const app = express();
const port = process.env.PORT || 8080;
const public_path = express.static(path.join(__dirname, '/public'));
const index_path = path.join(__dirname, '/public/index.html');


console.log(public_path);
app.use('/public', public_path);
app.get('/', function (_, res) { res.sendFile(index_path) });

app.listen(port);



