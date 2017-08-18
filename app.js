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

console.log(argv);

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=sqs%20204%20bloco%20b%20bras%C3%ADlia',
  json: true
},(error,response,body) => {
  if (_.isNull(error)){
    // console.log('RESPONSE',JSON.stringify(response,undefined,2))
    console.log(`Endereço: ${body.results[0].formatted_address}`);
    console.log(`Latidude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    //
//  console.log('ERROR:',JSON.stringify(error,undefined,2));
  //  console.log('BODY',JSON.stringify(body,undefined,2));
} else {
  console.log('ERROR', JSON.stringify(error,undefined,2))
}
});
