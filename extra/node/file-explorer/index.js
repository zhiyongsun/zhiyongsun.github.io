var fs = require('fs');

// 获取当前目录的文件列表,异步版

function async(err, files) {
  console.log(files);
};

fs.readdir(__dirname, async)


console.log(process)


fs.readdir(process.cwd(), function (err, files) {
  console.log('');

  if (!files.length) {
    return console.log('    \033[31m No file to show!\033[39m\n');
  }

  console.log(' Select which file or directory you want to see\n');

  function file(i) {
    var filename = files[i];

    fs.stat(__dirname + '/' + filename, function (err, stat) {
      if (stat.isDirectory()) {
        console.log('   ' + i + '    \033[36m' + filename + '/\033[39m');
      } else {
        console.log('   ' + i + '    \033[90m' + filename + '\033[39m');
      }

      i++;
      if (i == files.length) {
        console.log('');
        process.stdout.write(' \033[33mEnter your choice: \033[39m');
        process.stdin.resume();
      } else {
        file(i);
      }

    });
  }

  file(0);
});

