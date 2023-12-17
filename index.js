const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", function (req, res) {
  res.render("pages/main", {page: 'main'});
});

app.get("/about", function (req, res) {
  res.render("pages/about", {page: 'about'});
});

app.get("/services", function (req, res) {
  res.render("pages/services", {page: 'services'});
});

app.get("/specialists", function (req, res) {
  res.render("pages/specialists", {page: 'specialists'});
});

app.get("/certificate", function (req, res) {
  res.render("pages/certificate", {page: 'certificate'});
});

app.get("/text", function (req, res) {
  res.render("pages/text", {page: 'text'});
});

app.get("/reviews", function (req, res) {
  res.render("pages/reviews", {page: 'reviews'});
});

app.get("/contacts", function (req, res) {
  res.render("pages/contacts", {page: 'contacts'});
});

app.get("/actions", function (req, res) {
  res.render("pages/actions", {page: 'actions'});
});

app.get("/articles", function (req, res) {
  res.render("pages/articles", {page: 'articles'});
});

app.get("/divorce", function (req, res) {
  res.render("pages/divorce", {page: 'divorce'});
});

app.listen(8080);
console.log("Server is listening on port 8080");
