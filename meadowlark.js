//v8.19.19


//require modules
var fortune = require('./lib/fortune.js');
var express = require('express');
var app = express();

// set up handlebars view engines
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars'); 

//set port to default OR 3000
app.set('port', process.env.PORT || 3000);

//set static directory as /public 
app.use(express.static(__dirname + '/public'));

//set pages
app.get('/', (req, res)=>{
  res.render('home');
});

app.get('/about', (req,res)=>{
  res.render('about', {  fortune:fortune.getFortune()});
});

 // 404 catch-all handler (middleware)
 app.use(function(req, res, next){
  res.status(404);
  res.render('404');
 });
 
 // 500 error handler (middleware)
 app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
 });
 

//start server
app.listen(app.get('port'), function(){ 
  console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});