// const _ = require('lodash');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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
geocode.geocodeAddress(argv.a, (errorMessage,results) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results,undefined,2));
  }
});
