/**
 * Created by xinzheng on 1/24/17.
 */

const path = require('path');
const express = require('express');


const app = express();
const indexPath = path.join(__dirname, '/public/index.html');
const publicPath = express.static(path.join(__dirname, '/public'));

app.use(publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) });


app.listen(port);
