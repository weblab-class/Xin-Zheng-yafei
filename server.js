/**
 * Created by xinzheng on 1/24/17.
 */

const path = require('path');
const express = require('express');
var mongoose = require('mongoose');


//
// const app = express();
// const indexPath = path.join(__dirname, '/public/index.html');
// const publicPath = express.static(path.join(__dirname, '/public'));
//
// app.use(publicPath);
// app.get('/', function (_, res) { res.sendFile(indexPath) });
//


const app = express();
const port = process.env.PORT || 8080;
const public_path = express.static(__dirname + '/public');
const index_path = __dirname + '/public/index.html';

app.use(public_path);
app.get('*', function (request, response) {
  response.sendFile(index_path, function (error) {
    if (error) {
      console.log(error);
    }
  });
});





mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/test');
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.on('connected', function() {
  console.log('database connected!');
});


var userSchema = new mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  url: {type: String, required: true}
});

var UserURL = mongoose.model('UserURL', userSchema);

app.post("/addposter",function (request, response) {
  var newposter = new UserURL({username: request.username,url:request.url})
   newposter.save(function(err) {

  });
})


app.listen(port);
console.log("Listening at http://localhost:" + port);

