const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url : `https://api.darksky.net/forecast/eb549a0400382fa82f05495eea170975/${lat},${lng}?units=si`,
    json: true
  },(error, response, body) => {
    //console.log("Trying to connect...");
    //console.log(JSON.stringify(response,undefined,2));
     if (!error && response.statusCode === 200){
       callback(undefined,{
         actualTemp: body.currently.temperature,
         apparentTemp: body.currently.apparentTemperature
       });
     } else {
       callback('Unable to fetch temperature.');
     }
  });
}

module.exports = {
  getWeather
};
