// server and creatin Net Ninjia

let http = require("http");
var fs = require("fs");

// let server = http.createServer(function(req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hey Ryan");
// });
// let myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// let myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// // myReadStream.on("data", function(chunk) {
// //   console.log("new chunk received");
// //   myWriteStream.write(chunk);
// // });

// myReadStream.pipe(myWriteStream);

// let server = http.createServer(function(req, res) {
//   console.log("request was made: " + req.url);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   let myReadStream = fs.creatReadStream(__dirname + "index.html", "utf8");
//   myReadStream.pipe(res);
//   res.end("Hey Ryan");
// });

const server = http.createServer(function(req, res) {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  let myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("Ryan is now listening to port 3000");

// let server = http.createServer(function(req, res) {
//   console.log("request was made: " + req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   const myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
//   // const myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
//   // myReadStream.pipe(myWriteStream);
//   myReadStream.pipe(res);
//   // let myReadStream = fs.creatReadStream(__dirname + "readMe.txt", "utf8");
//   // myReadStream.pipe(res);
//   // res.end("Hey Ryan");
// });
