var https = require('https');
var parser = require('xml2json');
var striptags = require('striptags');


https.get('https://api.darksky.net/forecast/[YourAPIKeyHere]/[YourLocationHere]', function(res){
	var body = '';
	res.on('data', function(chunk){
		body += chunk;
	})

	res.on('end', function(){
		var data = JSON.parse(body);

		console.log("CURRENTLY: " + data.currently.temperature + " and " + data.currently.summary)
		console.log("FEELS LIKE: " + data.currently.apparentTemperature)
		console.log("SOON: " + data.minutely.summary )
	})
});