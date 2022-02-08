'use strict';

module.exports.hello = async (event) => {
  let api = process.env.xxx
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'And the lucky number is '+api,
        input: event,
      },
      null,
      2
    ),
  };
};
