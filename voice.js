 // Twilio Credentials 
var accountSid = 'AC5b39297c6e639009a42ef402361e75a1'; 
var authToken = 'd1eefe387e549b794996976dfd239e54'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.calls.create({ 
	to: "+447774495441", 
	from: "+441455561002", 
	url: "http://demo.twilio.com/docs/voice.xml",           
}, function(err, call) { 
	console.log(call.sid); 
}); 