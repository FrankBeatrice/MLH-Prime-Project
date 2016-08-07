var twilioClient = require('../twilioClient');
var fs = require('fs');
var admins = require('../config/administrators.json');
var Twit = require('twit')

var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
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
