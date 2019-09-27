const log = require("./logger.js");

console.log(__filename);
console.log(__dirname);

// console.log(logger);

log("message");

function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Ryan");

// console.dir(module, { depth: null });
