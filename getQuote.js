var http = require('http')



http.get('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', function(res){
	var body = '';
	res.on('data', function(chunk){
		body += chunk;
	})

	res.on('end', function(){
		body = JSON.parse(body)
		console.log(body["quoteText"] + " - " + body['quoteAuthor']);
	})
});