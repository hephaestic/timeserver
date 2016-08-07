var app = require('express')();
var moment = require('moment');
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  var filename = path.join(__firname, 'index.html');
  res.sendFile(fileName, function(err){
    if(err)res.status(err.status).end();
  });
});

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

app.listen(port, function(){
  console.log("Listening on port 3000");
});
