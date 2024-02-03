const httpServer = require('http-server');
const path = require('path');

const server = httpServer.createServer({
  root: path.resolve(__dirname),
  headers: {
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'cross-origin',
  },
});

server.listen(8080, () => {
  console.log('Server is running on http://127.0.0.1:8080');
});
