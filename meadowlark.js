var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
node 
//custom 404 page

app.use(function(req, res) {
  res.type("text/plain");
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(500);
  res.send("500 - Server Error");
})

app.listen(app.get('port', function(){
  console.log( ' Express Started On localhost:' + app.get('port'),  + 'Press Ctrl-C To Terminate');
}))