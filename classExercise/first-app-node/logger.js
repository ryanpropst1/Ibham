var url = "http://myloggeer.io/log";

function log(message) {
  //send HTTP request
  console.log(message);
}

module.exports = log;

const debug = require("debug");
debug("%O", module);
