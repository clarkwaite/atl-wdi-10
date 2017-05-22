'use strict';

const fs = require('fs');

let inFile = process.argv[2];

let readTheFilePromise = new Promise(function(resolve, reject){
  fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
    resolve(content);
    reject("line 28 error ", error);
  });
});

readTheFilePromise.then(function(result){
  return result;
})
.then(function(result){
  let lines = result.split('\n');
  return lines;
})
.then(function(lines){
  lines.pop();
  return lines;
})
.then(function(lines){
  lines.forEach(function(line){
    console.log('Hello, ' + line + '!');
  });
})
