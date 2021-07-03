const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>Dockerized NodeJS Application running on Amazon ECS with Fargate Launch Type</h1>`
  );
});

app.get("/fargate/*", (req, res) => {
  res.send(
    `<h1>Dockerized NodeJS Application running on Amazon ECS with Fargate Launch Type</h1>
    <h2>This is landing page of our web application, open to everyone!</h2>
    <ul>
    <li> We’re expecting a spike in traffic and unpredictable workload </li>
    <li> Not enough data to predict resource utilization </li>
    <li> Not enough time for manually maintaining and autoscaling of cluster. </li>
    </ul>
    <img src="https://orchestrating-ecs-launch-types.s3.eu-west-1.amazonaws.com/Fargate-html.png" alt="ECS with EC2 Launch Type" width="800" height="400">`
  );
});

app.listen(80, () => {
  console.log("Listening on port 80");
});
