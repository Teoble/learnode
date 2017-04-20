var ff = require('./licao6mod.js');

ff(process.argv[2], process.argv[3], function(err, data){
  if(err) console.error("Error1:" + err);
  data.forEach(function(element, index, array){
    console.log(element);
  });
});
