require('colors');
console.log('smahing node' .rainbow);

var a = require('./module_a');
console.log(a.name);
console.log(a.data);
console.log(a.getPrivate());


var Person = require('./person');

var john = new Person('john');

john.talk();

var mybuffer = new Buffer('==ii1j2i3h1i23h', 'base64');

console.log(mybuffer)

require('fs').writeFile('logo.png',mybuffer);
