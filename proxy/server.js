const path = require("path");
const DIST_DIR = path.join(__dirname, "./public");
const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 3000;
const axios = require("axios");

app.use(express.static(DIST_DIR));
app.use("/:id/", express.static(DIST_DIR));
app.use(parser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/reviews/hotels/:hotelId", (req, res) => {
  axios
    .get("http://localhost:3001/reviews/hotels/" + req.params.hotelId)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

app.get("/gallery/:id/", (req, res) => {
  axios
    .get("http://localhost:6969/gallery/" + req.params.id)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

app.get("/hotels/:id/", (req, res) => {
  axios
    .get("http://localhost:1128/hotels/" + req.params.id)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log(`Proxy listening on ${port}`);
});

module.exports = app;
