var fs = require('fs'),
  stdin = process.stdin,
  stout = process.stdout;


fs.readdir(process.cwd(), function (err, files) {
  console.log('');

  var stats = [];

  function file(i) {
    var filename = files[i];

    fs.stat(__dirname + '/' + filename, function (err, stat) {
      stats[i] = stat;
      if (stat.isDirectory()) {
        console.log('   ' + i + '    \033[36m' + filename + '/\033[39m');
      } else {
        console.log('   ' + i + '    \033[90m' + filename + '\033[39m');
      }

      if (++i == files.length) {
        read();
      } else {
        file(i);
      }

    });
  }

  function read() {
    console.log('');
    stout.write('    \033[33mEnter your choice: \033[39m');
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', option);
  }


  function option(data) {
    var filename = files[Number(data)];
    if (!filename) {3
      stout.write('    \033[31mEnter your choice: \033[39m');
    } else {
      stdin.pause();
      if (stats[Number(data)].isDirectory()) {
        fs.readdir(__dirname + '/' + filename, function (err, files) {
          console.log('')
          console.log('     (' + files.length + ' files)');
          files.forEach(function (t) {
            console.log('    -    ' + file);
          });

          console.log('');
        })
      } else {
        fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {

          console.log('');
          console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
        })
      }
    }
  }

  if (!files.length) {
    return console.log('    \033[31m No file to show!\033[39m\n');
  }

  console.log(' Select which file or directory you want to see\n');

  file(0);
});

