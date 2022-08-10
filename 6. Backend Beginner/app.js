const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("welcome express");
});

server.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`hello ${name}`);
});

server.get("/search", (req, res) => {
  const { name, age } = req.query;
  res.send(`hello ${name}, umurmu ${age}`);
});

server.listen(8080, () => {
  console.log("Server ready");
});
