var cheerio = require('cheerio')
var request = require('request');

request('http://substack.net/images/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	let $ = cheerio.load(body);
  	// console.log(body); //prints out everything
     // Show the HTML for the page.
     // body.for
  //    console.log($('code').html());
  //   var permission_codes = [];
  //   $('code').each(function(i, elem) {
	 //  	permission_codes.push($(this).text());
		// });
  //   var url = $('a').attr("href")
  //   console.log(url)
  			var permission_codes = [];
   		$('tr').each(function(i, elem){

   			// console.log(elem)
   			  var perm = $(elem).find("code").first().text()
   			  var url =  $(elem).find("a").attr("href")
   			  var filetype = $(elem).find("a").text().split(".")[1]// you can just stack jquery, and call 1 when wanting the second element after the split
   				// $("a").attr("href")
   				console.log(filetype)
   				// console.log(url)

   			});
   		}
  })


