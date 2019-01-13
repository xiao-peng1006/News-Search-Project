var express = require('express');
var path = require('path');
var cors = require('cors');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');

var config = require('./config/config.json');
require('./models/main.js').connect(config.mongoDbUri);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../client/build'));
app.set('view engine', 'jade');

app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

app.use('/', indexRouter);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
});

// solving cross origin request issue for development
app.use(cors());

module.exports = app;
