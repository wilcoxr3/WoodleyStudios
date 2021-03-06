const http = require('http');
const express = require('express');
const app = express();
const url = require('url');
const https = require('https');
const mongoclient = require('mongodb').MongoClient; //database

/* const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
}); */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });
   
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
   
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
   
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
//USERS
app.get('/users', (req, res) => {
    return res.send(Object.values(users));
  });
   
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
   
  app.put('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
  });
   
  app.delete('/users/:userId', (req, res) => {
    return res.send(
      `DELETE HTTP method on user/${req.params.userId} resource`,
    );
  });
  let users = {
    1: {
      id: '1',
      username: 'Ryan Wilcox',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };
const port = process.env.PORT || 4000;
app.listen(port, function(){
    initialize();
    console.log("listening on port 4000")
});

console.log("Server running at http://localhost:%d", port);


