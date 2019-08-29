/****************************
*            REQUIRE MODULES            *
****************************/
var fortune = require('./lib/fortune.js');
var express = require('express');
var app = express();
var tools = require("./lib/tools/tools.js");
var contextObjects = require("./lib/handlebars-context/context-master.js");

//Require handlebars
//Set defaultLayout to main.handlebars (file extension omitted in HB)
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

// set up handlebars view engines
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//set port 
app.set('port', process.env.PORT || 80);

/****************************
*                 MIDDLEWARE                 *
****************************/

//set static directory  
app.use(express.static(__dirname + '/public'));

//Add middleware to show test when query string has ?test=1 & environment (env) us set to 'production'
app.use(function (req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

app.use(function(req, res, next){
  if(!res.locals.partials) { res.locals.partials = {} }
  res.locals.partials.weatherContext  = contextObjects.weather.getWeatherData();
  next();
});

/***********************************
*            DEBUGGING PAGES/ROUTES            *
***********************************/

//show request headers
app.get("/headers", function(req, res) {
  res.type('text/plain');
  let s = '';
  for(var name in req.headers) {
    s += name + ' : ' + req.headers[name] + '\n';
  }
  res.send(s)
});


// DEBUGGING PAGE
app.get('/debug', function (req, res) {
  res.type("text/plain")
  let debug = req.path;
  res.send(debug);
  console.log(debug);
});

//DEBUGGING JSON PAGE
app.get('/debug-json', function (req, res) {
  res.type("application/json")
  let debug = res.locals;
  res.json(debug);
  console.log(debug);
});


//RENDER A SPECIFIC VIEW WITH ?v=VIEW -- CONTEXT SUPPORT WITH ?v=viewName&c=contextFileName
app.get("/render", function(req,res){
  tools.renderViewFromQueryString(req, res);
});

/***********************************
*            APPLICATION PAGES/ROUTES           *
***********************************/

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: 'vendor/qa/tests-about.js'
  });
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get('/tours/hood-river', function (req, res) {
  res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function (req, res) {
  res.render('tours/request-group-rate');
});

/****************************
*        ERROR HANDLER PAGES         *
****************************/

//// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
  res.status(404);
  res.render('404');
});

//// 500 error handler (middleware)
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

/****************************
*        START SERVER ON P:80          *
****************************/

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});