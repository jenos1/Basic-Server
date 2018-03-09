var http = require("http");

// Define ports to listen to.
var PORT1 = 7500;
var PORT2 = 7000;

// We need two different functions to handle requests, one for each server.
function handleRequest1(request, response) {
  response.end("This is server port1. Path HIT: " + request.url);
}

function handleRequest2(request, response) {
  response.end("This is server port2 Path HIT: " + request.url);
}

// Create our servers
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

// Starting our servers
server1.listen(PORT1, function() {
   // Callback triggered when server is successfully listening.
  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});