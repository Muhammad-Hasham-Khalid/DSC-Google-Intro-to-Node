const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1> Hello from Node.js </h1>");
    res.end();
  })
  .listen(5000, () => console.log("Listening on http://localhost:5000"));
