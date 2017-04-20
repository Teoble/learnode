
module.exports = function (dir,ext,callback){
    var fs = require('fs');
    var path = require('path');
    var files = [];

    fs.readdir(dir, function(err,data){
      if(err) return callback(err);
      data.forEach(function(value){
        if(path.extname(value) == '.' + ext)
          files.push(value);
      });

      callback(null, files);
    });
};
