// const http = require("http");
const express = require("express");
const cors = require("cors");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true // enable set cookie
  })
);

app.get("/", (req, res) => {
  res.send("you are connected");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
