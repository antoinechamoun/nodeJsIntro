const express = require("express");
const app = express();
const { readFile } = require("fs").promises;

const hostname = "127.0.0.1";
const port = 3000;

app.get("/", async (req, res) => {
  res.send(await readFile("./home.html", "utf-8"));
});

app.get("/contactme", async (req, res) => {
  res.send(await readFile("./contactme.html", "utf-8"));
});

app.get("/about", async (req, res) => {
  res.send(await readFile("./about.html", "utf-8"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
