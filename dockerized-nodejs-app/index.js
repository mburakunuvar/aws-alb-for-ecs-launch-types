const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>Dockerized NodeJS Application</h1>
    <h2>running on Amazon ECS with EC2 Launch Type</h2>`
  );
});

app.get("/ec2/", (req, res) => {
  res.send(
    `<h2> running on Amazon ECS with EC2 Launch Type </h2>
    <h3> http request to /ec2/* </h3>`
  );
});

// app.get("/fargate/*", (req, res) => {
//   res.send(
//     `<h2> running on Amazon ECS with Fargate Launch Type </h2>
//     <h3> http request to /fargate/* </h3>`
//   );
// });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
