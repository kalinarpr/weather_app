const request = require('request');
const _ = require('lodash');
const yargs = require('yargs');

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

//console.log(argv);

var urlEncoded = encodeURIComponent(argv.a);

//console.log(urlEncoded);
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncoded}`,
  json: true
},(error,response,body) => {
  if (error) {
    console.log('Unable to connect to Google servers.');
  } else if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find that address.');
  } else if (body.status === 'OK'){
    console.log(`Endereço: ${body.results[0].formatted_address}`);
    console.log(`Latidude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
