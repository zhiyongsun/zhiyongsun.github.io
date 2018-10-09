

var qs = require('querystring');
require('http').createServer(function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk;
    console.log(('\n got name \033[90M' + qs.parse(body).name + '\033[39m\n'));
  });

}).listen(3000);