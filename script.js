const express = require("express");
const app = express();
/* for this two line we make a server and mostly are called web application that why we store this "express" in app name variable;*/

app.get("/", (req, res) => {
  res.send(`<html>
<head>
<style>p{
    color:red;
}
</style>
</head>
<body>
<p> this is a Anant! welcome here </p>
</body>
</html>`);
});

app.get("/x", (req, res) => {
  res.send(`<html>
  <head>
  <style>  p{
      color:green;
  }
  </style>
  </head>
  <body>
  <h1> welcome to my X links </h1>
  </body>
  </html>`);
});

app.get("/logo", (req, res) => {
  res.sendFile(__dirname + "/google-logo.png");
});
app.get("/google", (req, res) => {
  res.redirect("https://www.google.com");
});
app.get("/example", (req, res) => {
  request("http://example.com", (err, resp, body) => {
    res.send(body);
  });
});
app.get("/good/:greeting/:name", (req, res) => {
  res.send(`good ${req.params.greeting} ${req.params.name} `);
});
app.get("/greet", (req, res) => {
  let name = "jane";
  if (req.query.name) {
    name = req.query.name;
  }
  let greeting = "Hi";
  if (req.query.greeting) {
    greeting = req.query.greeting;
  }
  res.send(`${greeting} ${name}`);
});

app.listen(3333, () => {
  console.log("server started successfully");
});

/* some port whose make server on your own comoputer
127.0.0.1
0.0.0.0
localhost */
