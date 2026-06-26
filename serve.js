const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8731;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml' };

http.createServer((req, res) => {
  let file = req.url === '/' ? 'app.dc.html' : req.url;
  file = path.join(__dirname, file);

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(file);
    const type = (MIME[ext] || 'text/plain') + '; charset=utf-8';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`✓ V-Heritage server running at http://localhost:${PORT}`);
});
