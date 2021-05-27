const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>Dockerized NodeJS Application</h1>
    <h2>running on Amazon ECS with EC2 Launch Type</h2>`
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
