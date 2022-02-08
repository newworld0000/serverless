'use strict';

var AWS = require('aws-sdk');
var lambda = new AWS.Lambda();

var params = {
  FunctionName: 'ex6-dev-consumer', /* required */
};



module.exports.producer = async (event) => {

  const response = await new Promise((resolve, reject) => { 
    lambda.invoke(params, function(err, data) {
      if (err) reject(err.message); 
      else     resolve(data);           
    });
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: response,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.consumer = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Consumer',
        input: event,
      },
      null,
      2
    ),
  };
};
