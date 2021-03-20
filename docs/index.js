const express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', function(req, res) {
  res.redirect('public/index.html')
})

app.post('/submit-form', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  res.redirect('public/home.html')
  res.end()
})

app.get('/process_get', function (req, res) {
  // Prepare output in JSON format
  response = {
     first_name:req.query.first_name,
     last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
})

var server = app.listen(5500, function () {
  var port = server.address().port
  
  console.log("Example app listening on port " + port);
})


