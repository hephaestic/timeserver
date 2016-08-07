var app = require('express')();
var moment = require('moment');

app.get('/', function(req, res){
  res.end('hello world');
})

app.get('/:datestring', function(req, res){
  var datestring = req.params.datestring;
  var unix = moment(datestring, 'X');
  var natural = moment(datestring, 'MMMM DD, YYYY');

  var result = {"unix": null, "natural": null};
  if(unix.isValid() && parseFloat(datestring)){
    result.unix = unix.format('X');
    result.natural = unix.format('MMMM DD, YYYY');
  }
  else if(natural.isValid()){
    result.unix = natural.format('X');
    result.natural = natural.format('MMMM DD, YYYY');
  } else {
    result.unix = null;
    result.natural = null;
  }

  res.json(result);
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
