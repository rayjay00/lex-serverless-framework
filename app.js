"use strict";

// eslint-disable-next-line import/no-unresolved
const express = require("express");

const app = express();

// Routes
app.get("/*", (req, res) => {
  res.send(`erterte ${req.path}`);
});

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send("Internal Serverless Error");
});

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());

// const songs = require("./routes/api/songs");

// mongoose
//   .connect(process.env.URI)
//   .then(() => console.log("connected"))
//   .catch((err) => console.log("error", err));

// app.use("/api/songs", songs);

// app.use("/", (req, res) => res.send(200));

// app.use(function (req, res) {
//   res.send(404);
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("running at port " + port));

module.exports = app;
