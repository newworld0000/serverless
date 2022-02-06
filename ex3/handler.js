'use strict';
var http = require('http');
module.exports.hello = async (event) => {

  console.log('yyyyyyyy');

  var city = process.env.city;
  var weatherkey = process.env.weatherkey;
  var weatherUrl =
      'http://api.openweathermap.org/data/2.5/weather?q='
      + city
      + '&units=imperial&appid='
      + weatherkey;
  console.log('aaa1');
  let data = '';

  const response = await new Promise((resolve, reject) => {    
    http.get(encodeURI(weatherUrl), function(res) {
        console.log('Got response: ' + res.statusCode);
        res.setEncoding('utf8');
        res.on('data', function(d) {
          const obj = JSON.parse(d);
          resolve("In " + city +" the temperature stands at "+ obj.main.temp  +" F, "+ obj.weather[0].description + " above");
        }); 
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
        reject("Got error: " + e.message);
    });
  });
  return {
    statusCode: 200,
    body: JSON.stringify( response ),
  };
}