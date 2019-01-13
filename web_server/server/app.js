var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');
var auth = require('./routes/auth');

var passport = require('passport')

var config = require('./config/config.json');
require('./models/main.js').connect(config.mongoDbUri);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../client/build'));
app.set('view engine', 'jade');

app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

app.use('/', indexRouter);
app.use('/news', newsRouter);
app.use('/auth', auth);

// load passport strategies
app.use(passport.initialize());
var localSignupStrategy = require('./auth/signup_passport');
var localLoginStrategy = require('./auth/login_passport');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./auth/auth_checker');
app.use('/news', authCheckMiddleware);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
});

// solving cross origin request issue for development
app.use(cors());

module.exports = app;
