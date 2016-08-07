var Twit = require('twit')

var fs = require('fs')

var T = new Twit({
 consumer_key: '40dqesL9DzcVZdNrmeKXgnGPb',
 consumer_secret: '0tj0Lr4tHLQKQqwSu6br1fdKJiAgqr3FfZmZ60hi8N1p1FiGkz',
 access_token: '161861111-duBS6hL4Ivdd2ZSj3HqXoQwKJ3Ds9qUOlg1SGfjK',
 access_token_secret: 'O8uPLTFuyhJ1aSweHWeiUMdY5UbMmBRhV3SVnHeQAsyhb',
 timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})


T.get('account/verify_credentials', { skip_status: true })
  .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
 

    console.log('data', result.data);
  })

