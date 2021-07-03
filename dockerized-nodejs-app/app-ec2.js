const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>Dockerized NodeJS Application running on Amazon ECS with EC2 Launch Type</h1>`
  );
});

app.get("/ec2/*", (req, res) => {
  res.send(
    `<h1>Dockerized NodeJS Application running on Amazon ECS with EC2 Launch Type</h1>
    <h2>This page is only for subscribed members of our webpage!</h2>
    <ul>
    <li> Resource utilization per user is known </li>
    <li> Cluster Autoscaling and Idle EC2 Capacity is managed by us</li>
    <li> We can SSH into host and install  proprietary company software</li>
    </ul>
    <img src="https://orchestrating-ecs-launch-types.s3.eu-west-1.amazonaws.com/ECS-html.png" alt="ECS with EC2 Launch Type" width="800" height="400">`
  );
});

app.listen(80, () => {
  console.log("Listening on port 80");
});
