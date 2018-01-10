var http = require('http');
var parser = require('xml2json');
var striptags = require('striptags');


http.get('http://web.mta.info/status/serviceStatus.txt', function(res){
	var body = '';
	res.on('data', function(chunk){
		body += chunk;
	})

	res.on('end', function(){
		var json_xml = parser.toJson(body);
		json = JSON.parse(json_xml);
		var subways = json.service.subway.line 

		subways.forEach(function(train){
			var delays = train.text;
			var info = striptags(delays);
			info = info.replace(/&nbsp;/g, " ");
			console.log("The " + train.name + " line currently has a status of " + train.status)
			info != undefined ? console.log(info) : console.log('');
			console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

		})
	})
});
