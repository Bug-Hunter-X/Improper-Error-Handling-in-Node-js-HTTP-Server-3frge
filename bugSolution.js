const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Add error handling
server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use. Please choose a different port.');
    process.exit(1);
  } else {
    console.error('An unexpected error occurred:', err);
  }
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});