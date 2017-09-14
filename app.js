const _ = require('lodash');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for.',
      string: true
    }
  })
  .help()
  .argv;

var lat;
var long;

//console.log(argv);
 geocode.geocodeAddress(argv.a, (errorMessageAddress,results1) => {
   if (errorMessageAddress){
     console.log(errorMessageAddress);
   } else {
     weather.getWeather(results1.lat, results1.lng,(errorMessageTemp,results2) => {
        if (errorMessageTemp){
          console.log(errorMessageTemp);
        } else {
          console.log(`It's ${results2.actualTemp} Celsius, but it appears to be ${results2.apparentTemp} in ${results1.address}`);
          //console.log(JSON.stringify(results1,undefined,2));
          //console.log(JSON.stringify(results2,undefined,2));
        }
     });
     //console.log(JSON.stringify(results,undefined,2));
   }
 });
