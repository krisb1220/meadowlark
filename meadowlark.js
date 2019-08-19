//v8.19.19

var fortunes = [
  "With integrity and consistency -- your credits are piling up.",
  "Reach out your hand today to support others who need you.",
  "It is not the outside riches bit the inside ones that produce happiness.",
  "How dark is dark?, How wise is wise?",
  "We can admire all we see, but we can only pick one.",
  "The man who has no imagination has no wings.",
  "To courageously shoulder the responsibility of one's mistake is character.",
  "We can't help everyone. But everyone can help someone.",
  "You discover treasures where others see nothing unusual.",
  "Make all you can, save all you can, give all you can.",
  "Understanding the nature of change, changes the nature.",
  "You will be unusually successful in business."
]
var express = require('express');
var app = express();

// set up handlebars view engine
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
// app.get('/', function(req, res) {
//   res.render('home');
//  });

app.get('/about', (req,res)=>{

  let randomFortune = ()=>{
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }

  res.render('about', {  fortune:randomFortune });
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