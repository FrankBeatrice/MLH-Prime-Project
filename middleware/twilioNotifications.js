var twilioClient = require('../twilioClient');
var fs = require('fs');
var admins = require('../config/administrators.json');

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
