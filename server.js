// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   // set header content type
//   res.setHeader("Content-Type", "text/html");
//   fs.readFile("./views/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(404);
//       res.end("404 Not Found");
//     } else {
//       res.write(data);

//       res.end();
//     }
//   });

//   res.write("<p></p>");
//   res.end();
// });
// server.listen(3000, "localhost", () => {
//   console.log("Listening for requests on port 3000");
// });
const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log(num);
  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  res.setHeader("Content-type", "text/html");
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("server listening on port 3000");
});
