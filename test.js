function returnFilterFiles(dir,ext){
  var fs = require('fs');
  var path = require('path');
  var files = [];

  fs.readdir(dir, function(err,data){
    if(err) console.error(err);
    data.forEach(function(value){
      if(path.extname(value) == '.' + ext){
        files.push(value);
        console.log(files);
      }
    });
  });

  console.log(files);
}


returnFilterFiles("/home/rafael/learnnode/", "js");
