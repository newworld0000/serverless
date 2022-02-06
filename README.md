# serverless
## **Exercise 1**  
Here is a tutorial how in AWS Console create simple lambda+dynamodb application:  
https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html  
Create the same application but using only serverless  
*Hint*: Use serverless creator to create sample dynamodb lambda. Then customize it  


 cmd>serverless  

Creating a new serverless project  

? What do you want to make?  
  AWS - Node.js - Starter  
  AWS - Node.js - HTTP API  
  AWS - Node.js - Scheduled Task  
  AWS - Node.js - SQS Worker  
  AWS - Node.js - Express API  
  **AWS - Node.js - Express API with DynamoDB**  
  AWS - Python - Starter  
  AWS - Python - HTTP API  
  AWS - Python - Scheduled Task  
  AWS - Python - SQS Worker  
  AWS - Python - Flask API  
  AWS - Python - Flask API with DynamoDB  
  Other  


  **Solution in folder [ex1](ex1)**

## **Exercise 2**  
In AWS console, in Secrets Manager create new secret (type Other) called "xxx" with key value pair x=9  
Then in serverless create lambda that returns the secret number, 9 in this case  
*Hint*: Use "AWS - Node.js - Starter" template in serverless creator  

**Solution in folder [ex2](ex2)** 
