# Improper Error Handling in Node.js HTTP Server

This repository demonstrates a common error in Node.js: a lack of robust error handling in an HTTP server. The initial `bug.js` file showcases the flawed code.  The `bugSolution.js` file provides a corrected version with improved error handling.

## Bug

The primary issue is the absence of error handling within the `server.listen` and `http.createServer` methods.  Without proper error handling, the server can crash without informative error messages if a port is in use or other unexpected issues arise.

## Solution

The solution adds error handling to gracefully handle these situations.  This prevents unexpected crashes and provides more informative logging to help with debugging.