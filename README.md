# Basic-Server

This is a basic server created with Node.js. The code creates a listener for each of two servers and waits for us to make a request on the specified port. There are two handle requests in the code, one for each server. 

## To Start the Servers
* Go to the Terminal and enter: node server7500.js  
* Verify your servers are now listening on specified ports (meaning the server is now started):
  * Server listening on: http://localhost:7500
  * Server listening on: http://localhost:7000
* Next, open a Browser and enter either URL above, for example:
  * http://localhost:7500
  * Verify that the Browser displays the server and specfied port details, for example:
    * This is server port1. Path HIT: /
    * The server listens for the request, parses the URL and pulls out root of URL.

## To Stop the Server
* Go to the Terminal and enter Ctrl + C.
