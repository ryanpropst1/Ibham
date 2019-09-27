const express = require('express');
let app = express();
app.get(‘/’
, (req, res, next) => {
res.send(“Hello World!”);
});
app.listen(3000);


app.get(‘/’
, (req, res, next) => {
res.sendFile(path.join(__dirname, “index.html”));
});

app.use(express.static(path.join(__dirname, ‘public’));

Request Body
● Some requests, like POST requests, send data in the body of the request
● body-parser is an express middleware that converts the body based on the
Content-Type header
$ npm install body-parser --save/Users/ryanshome/Desktop/classExercise alias
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Router
● The default router exists on the express app
○ app.get, app.post, app.put, app.delete
● Express also exposes standalone routers as middleware
○ Breakup routing into smaller modules (imagine a site with hundreds of routes!)
var express = require('express');
var app = express();
var router = express.Router();
router.get('/about', function (req, res) {
 res.send(`Hi! I’m Matt` );
});
app.use(router); // a router is just middleware!
Routes with Parameters
● Sometimes routes with dynamic data are needed
● A colon in the route string signifies a route parameter
● Imagine a user profile page that shows a particular user’s information
○ http://localhost:3000/user/userID
app.get(‘/user/:id/’
, (req, res) => {
let userID = req.params.id;{
});
app.get(‘/user/:order/:item/’
, (req, res) => {
let item = req.params.item;
});
Express

//

let http = require('http');

let server = http.createServer(function(req,res){
console.log('requst was made: ' + req.url);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hey Ryan');
  });

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');


// server and creatin Net Ninjia

let http = require('http');

let server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hey Ryan');
});

server.listen(3000, '127.0.0.1');
console.log('Ryan is now listening to port 3000');






