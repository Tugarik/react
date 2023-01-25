const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hello World!\n");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
