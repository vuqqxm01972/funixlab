var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;
 
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Without middleware
app.get('/', function(req, res){
 
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    
    // set response content    
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.end();
})
 
// Without middleware
app.get('/user', function(req, res){
 
    // Rendering home.ejs page
    res.render('home');
})
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});