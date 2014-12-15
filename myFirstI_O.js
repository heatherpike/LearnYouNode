var fs = require('fs');

var newLines = fs.readFileSync(process.argv[2]).toString().split("\n");

console.log(newLines.length-1);



