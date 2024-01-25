        document.getElementById('signupForm').addEventListener('submit', function(event) {
            var password = document.getElementById('signupPassword').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                event.preventDefault();
                document.getElementById('signupErrorMessage').innerHTML = 'Passwords does not match.';
            }
        });
  
        const http = require("http");
        const fs = require("fs");
        const url = require("url");
        const querystring = require("querystring");

        const server = http.createServer((req, res) => {
          const { method, url: reqUrl } = req;
          const parsedUrl = url.parse(reqUrl, true);

          if (method === "POST" && parsedUrl.pathname === "/signup") {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk.toString();
            });
            req.on("end", () => {
              const formData = querystring.parse(body);


              console.log("Form data:", formData);
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end("<h1>User signed up successfully!</h1>");
            });
          } else {
            fs.readFile("N.Project-2.html", (err, data) => {
              fs.readFile("N.Project-2.html", (err, data) => {

                if (err) {
                  res.writeHead(404, { "Content-Type": "text/html" });
                  return res.end("404 Not Found");
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                return res.end();
              });
            });
          }
        });

        const PORT = process.env.PORT || 3000;
        server.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
