const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/secretData") {
    res.end("There is no secret data");
  }
  res.end("Hello world");
});

server.listen(3000);
