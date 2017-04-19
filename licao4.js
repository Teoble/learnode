var fs = require('fs');

fs.readFile(process.argv[2], 'utf8',function(err,data){
  if(err) errorFile(err);
  consolineLines(data);
});

function errorFile(error){
  console.error(error);
}

function consolineLines(data){
  console.log(data.split("\n").length-1);
}
