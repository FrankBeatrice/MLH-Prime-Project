var twilioClient = require('../twilioClient');
var fs = require('fs');
var admins = require('../config/administrators.json');
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'h4AWFpAwS2Q8cp3AEv6S9MdIh',
  consumer_secret:      'yYq8MZ9hvOMFPeeWbPrFLxwkRn1pykl6MdJGiujXzkjUCYhqjx',
  access_token:         '1532446794-YBeS9M1wDsmxoHef8l2GPnQMBpD10vZKTZHz6gg',
  access_token_secret:  'ZjqZCEOC0hZF818rhfBmzPgB2zcU0FZsAGdPC3gtfYeDs',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//
//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'Purple Monkey' }, function(err, data, response) {
  console.log(data)
})

function formatMessage(errorToReport) {
  return 'Hello This a Test of the data breach system' +
      + errorToReport +' for more details.';



      //if (err) run nspcheck --output checkstyle
     // && run nsp check --output summary
     // T.pot ('statuses/update'), { status: ""
// function9err,data, response { cconsole.log (data) } }}


};

exports.notifyOnError = function(appError, request, response, next) {
  admins.forEach(function(admin) {
    var messageToSend = formatMessage(appError.message);
    twilioClient.sendSms(admin.phoneNumber, messageToSend);
  });
  next(appError);
};
