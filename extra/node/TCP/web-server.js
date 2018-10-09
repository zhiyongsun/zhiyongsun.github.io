/**
 * Created by zhiyong on 2017/9/14.
 */
require('http').createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>');
}).listen(3000);