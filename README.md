# aws-alb-for-ecs-launch-types

[launch stack](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=aws-alb-for-ecs-launch-types&templateURL=https://orchestrating-ecs-launch-types.s3-eu-west-1.amazonaws.com/aws-alb-for-ecs-launch-types.yaml)

![](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)

```bash
# OPTIONAL If you prefer to ssh into your EC2 instances
$ aws ec2 create-key-pair --key-name ecs-ec2-ssh --query "KeyMaterial" --output text > my-key-pair.pem

# update <AWS ID> with your own account
$ aws ecs register-task-definition  --cli-input-json file://TD-nodejs-EC2.json
# update <AWS ID> with your own account
$ aws ecs register-task-definition  --cli-input-json file://TD-nodejs-Fargate.json
```
