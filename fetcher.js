const request = require('request');
const fs = require('fs');

var myArgs = process.argv.slice(2);
// //console.log('myArgs: ', myArgs);

//URL from input
const URL = myArgs[0];
//console.log('myArgs[0]', myArgs[0]);

//file path from input
const localFilePath = myArgs[1];

request(URL, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(localFilePath, body, (err) => {
    if (err)
      return console.log(err);

    fs.stat(localFilePath, (err, stats) => {
      if (err)
        return console.log('error in statSync', err);
      const fileSizeInBytes = stats.size;

      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${localFilePath}.`);

    });
  });
});



