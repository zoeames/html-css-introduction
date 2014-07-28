'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname+'/static'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/dogs', function(req, res){
  res.render('dogs');
});

app.get('/cats', function(req, res){
  res.render('cats');
});

app.get('/ninjas', function(req, res){
  res.render('ninjas');
});

app.get('/pirates', function(req, res){
  res.render('pirates');
});

app.listen(3001, function(){
  console.log('Express.js is listening...');
});
