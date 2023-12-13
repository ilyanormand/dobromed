const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", function (req, res) {
  res.render("pages/main");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/services", function (req, res) {
  res.render("pages/services");
});

app.get("/specialists", function (req, res) {
  res.render("pages/specialists");
});

app.get("/certificate", function (req, res) {
  res.render("pages/certificate");
});

app.listen(8080);
console.log("Server is listening on port 8080");
