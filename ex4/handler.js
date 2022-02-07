'use strict';

var AWS = require('aws-sdk'),
    region = "us-east-1",
    secretName = "xxx",
    secret,
    decodedBinarySecret;

// Create a Secrets Manager client
var client = new AWS.SecretsManager({
    region: region
});




module.exports.hello = async (event) => {

  const response = await new Promise((resolve, reject) => {  
    
    client.getSecretValue({SecretId: secretName}, function(err, data) {
      if (err) {
          console.log(err.code);
          reject('Error: ' + err.code);
      }
      else {
        // Decrypts secret using the associated KMS CMK.
        // Depending on whether the secret is a string or binary, one of these fields will be populated.
        if ('SecretString' in data) {
            secret = data.SecretString;
            console.log(secret);
            resolve(secret);
        } else {
            let buff = new Buffer(data.SecretBinary, 'base64');
            decodedBinarySecret = buff.toString('ascii');
            console.log(decodedBinarySecret);
            resolve(decodedBinarySecret);
        }
      }
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


