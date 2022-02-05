const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());


app.delete("/items/:id", async function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      id: req.params.id,
    },
  };

  try {
    await dynamoDbClient.delete(params).promise();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not delete user" });
  }
});

app.get("/items/:id", async function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      id: req.params.id,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { id, price, name } = Item;
      res.json({ id, price, name });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find user with provided "userId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
});



app.get("/items", async function (req, res) {
  const params = {
    TableName: USERS_TABLE,
  };

  try {
    //const { Item } = await dynamoDbClient.scan(params).promise();
	Item = await dynamoDbClient.scan(params).promise();
    //if (Item) {
    res.json({ Item });
		/*
    } else {
      res
        .status(404)
        .json({ error: 'Could not find user with provided "id"' });
    }
	*/
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive user" });
  }
});


app.post("/items", async function (req, res) {
  const { id, price, name } = req.body;


  const params = {
    TableName: USERS_TABLE,
    Item: {
      id: id,
	  price: price,
      name: name,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ id, price, name });
  } catch (error) {
    console.log(error);
    //res.status(500).json({ error: "Could not create user" });
	res.status(500).json({ error });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
