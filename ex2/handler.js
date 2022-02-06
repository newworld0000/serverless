'use strict';

module.exports.hello = async (event) => {
  let api = process.env.weatherkey
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
